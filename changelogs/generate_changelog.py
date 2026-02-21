import json
import requests
import os
import re
import subprocess

# =====================
# CONFIG
# =====================
API_KEY = os.getenv("CURSEFORGE_API_KEY")  # store your key in GitHub Secrets
CACHE_FILE = "cf_cache.json"
MODS_MARKER = "<!-- MODS_CHANGELOG -->"

# =====================
# PATH SETUP
# =====================
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # changelogs/
CHANGELOG_DIR = BASE_DIR
CHANGELOG_PATH = None  # will be determined automatically
MANIFEST_PATH = os.path.join(BASE_DIR, "manifest.json")
CACHE_FILE = os.path.join(BASE_DIR, CACHE_FILE)

# =====================
# HELPERS
# =====================

def find_latest_changelog(directory):
    """Find latest versioned changelog MODPACK-x.y.md"""
    pattern = re.compile(r"^.+-(\d+(?:\.\d+)*)\.md$")
    candidates = []

    for f in os.listdir(directory):
        m = pattern.match(f)
        if not m:
            continue
        version = tuple(int(v) for v in m.group(1).split("."))
        candidates.append((version, f))

    if not candidates:
        raise RuntimeError("No versioned changelog found")
    candidates.sort(reverse=True)
    return os.path.join(directory, candidates[0][1])

def load_previous_manifest(path):
    """Load previous manifest from Git (HEAD^)"""
    try:
        result = subprocess.run(
            ["git", "show", f"HEAD^:{path}"],
            capture_output=True,
            text=True,
            check=True
        )
    except subprocess.CalledProcessError:
        print("First run detected, no previous manifest found.")
        return {}  # empty old manifest on first run
    data = json.loads(result.stdout)
    return {e["projectID"]: e["fileID"] for e in data["files"]}

def load_current_manifest(path):
    if not os.path.exists(path):
        raise RuntimeError(f"New manifest.json not found at {path}")
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    return {e["projectID"]: e["fileID"] for e in data["files"]}

def save_cache(cache):
    with open(CACHE_FILE, "w", encoding="utf-8") as f:
        json.dump(cache, f, indent=2, ensure_ascii=False)

def get_mod_info(project_id, file_id, cache):
    key = f"{project_id}:{file_id}"
    if key in cache:
        return cache[key]

    # Get mod name
    project_resp = requests.get(f"https://api.curseforge.com/v1/mods/{project_id}",
                                headers={"x-api-key": API_KEY})
    if project_resp.status_code == 200:
        mod_name = project_resp.json()["data"]["name"]
    else:
        mod_name = f"Unknown ({project_id})"

    # Get file/version name
    files_resp = requests.get(f"https://api.curseforge.com/v1/mods/{project_id}/files",
                              headers={"x-api-key": API_KEY})
    version = "Unknown"
    if files_resp.status_code == 200:
        files = files_resp.json()["data"]
        matched_file = next((f for f in files if f["id"] == file_id), None)
        if matched_file:
            version = matched_file["fileName"]

    info = {"mod_name": mod_name, "version": version}
    cache[key] = info
    return info

def wrap_details(title, items):
    if not items:
        return ""
    lines = "\n".join(f"- {i}" for i in items)
    return f"<details>\n  <summary>{title} ({len(items)})</summary>\n\n{lines}\n\n</details>\n\n"

def inject_mods_changelog(changelog_path, mods_content):
    with open(changelog_path, "r", encoding="utf-8") as f:
        text = f.read()
    if MODS_MARKER not in text:
        raise RuntimeError(f"Marker {MODS_MARKER} not found in {changelog_path}")
    new_text = text.replace(MODS_MARKER, mods_content.strip())
    with open(changelog_path, "w", encoding="utf-8") as f:
        f.write(new_text)

# =====================
# MAIN SCRIPT
# =====================

# determine latest changelog
CHANGELOG_PATH = find_latest_changelog(CHANGELOG_DIR)
print(f"📝 Using changelog: {os.path.basename(CHANGELOG_PATH)}")

# load cache
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, encoding="utf-8") as f:
        cache = json.load(f)
else:
    cache = {}

# load manifests
old_manifest = load_previous_manifest("changelogs/manifest.json")
new_manifest = load_current_manifest(MANIFEST_PATH)

# diff
added, removed, updated = [], [], []

for pid, fid in new_manifest.items():
    if pid not in old_manifest:
        i = get_mod_info(pid, fid, cache)
        added.append(f"{i['mod_name']} ({i['version']})")
    elif old_manifest[pid] != fid:
        o = get_mod_info(pid, old_manifest[pid], cache)
        n = get_mod_info(pid, fid, cache)
        updated.append(f"{n['mod_name']}: {o['version']} → {n['version']}")

for pid, fid in old_manifest.items():
    if pid not in new_manifest:
        i = get_mod_info(pid, fid, cache)
        removed.append(f"{i['mod_name']} ({i['version']})")

# build markdown
mods_changelog = ""
mods_changelog += wrap_details("Added", added)
mods_changelog += wrap_details("Removed", removed)
mods_changelog += wrap_details("Updated", updated)
if not mods_changelog:
    mods_changelog = "_No mod changes this version._\n"

# inject
inject_mods_changelog(CHANGELOG_PATH, mods_changelog)

# save cache
save_cache(cache)

print("✅ Mods changelog generated and injected successfully!")
