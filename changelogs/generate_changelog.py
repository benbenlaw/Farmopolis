import json
import requests
import os

API_KEY = "$2a$10$Y64bw4w0RYpXpu9d9bEu7ulQSgP3MzXPm6rfmhEbqhnHf3oa8WOEq"
HEADERS = {"x-api-key": API_KEY}
CACHE_FILE = "cf_cache.json"

# Load or initialize cache
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, "r", encoding="utf-8") as f:
        cache = json.load(f)
else:
    cache = {}

def get_mod_info(project_id, file_id):
    # Use cache key
    key = f"{project_id}:{file_id}"
    if key in cache:
        return cache[key]

    # Get mod name
    project_url = f"https://api.curseforge.com/v1/mods/{project_id}"
    project_resp = requests.get(project_url, headers=HEADERS)
    if project_resp.status_code == 200:
        mod_name = project_resp.json()["data"]["name"]
    else:
        mod_name = f"Unknown ({project_id})"

    # Get all files for project
    files_url = f"https://api.curseforge.com/v1/mods/{project_id}/files"
    files_resp = requests.get(files_url, headers=HEADERS)
    version = "Unknown"
    if files_resp.status_code == 200:
        files = files_resp.json()["data"]
        matched_file = next((f for f in files if f["id"] == file_id), None)
        if matched_file:
            version = matched_file["fileName"]

    info = {"mod_name": mod_name, "version": version}
    # Save to cache
    cache[key] = info
    return info

def load_manifest(filename):
    with open(filename) as f:
        return {file["projectID"]: file["fileID"] for file in json.load(f)["files"]}

# Load old and new manifests
old_manifest = load_manifest("manifest_old.json")
new_manifest = load_manifest("manifest_new.json")

added, removed, updated = [], [], []

# Added or updated mods
for projectID, fileID in new_manifest.items():
    if projectID not in old_manifest:
        info = get_mod_info(projectID, fileID)
        added.append(f"{info['mod_name']} ({info['version']})")
    elif old_manifest[projectID] != fileID:
        old_info = get_mod_info(projectID, old_manifest[projectID])
        new_info = get_mod_info(projectID, fileID)
        updated.append(f"{new_info['mod_name']}: {old_info['version']} → {new_info['version']}")

# Removed mods
for projectID, fileID in old_manifest.items():
    if projectID not in new_manifest:
        info = get_mod_info(projectID, fileID)
        removed.append(f"{info['mod_name']} ({info['version']})")

# Write changelog
changelog = "# Changelog\n\n"
if added:
    changelog += "## Added\n" + "\n".join(f"- {m}" for m in added) + "\n\n"
if removed:
    changelog += "## Removed\n" + "\n".join(f"- {m}" for m in removed) + "\n\n"
if updated:
    changelog += "## Updated\n" + "\n".join(f"- {m}" for m in updated) + "\n"

with open("CHANGELOG.md", "w", encoding="utf-8") as f:
    f.write(changelog)

# Save cache
with open(CACHE_FILE, "w", encoding="utf-8") as f:
    json.dump(cache, f, indent=4, ensure_ascii=False)

def wrap_details(title, items):
    """
    Wrap a list of items in a collapsible Markdown section.
    """
    if not items:
        return ""
    lines = "\n".join(f"- {i}" for i in items)
    return f"<details>\n  <summary>{title} ({len(items)})</summary>\n\n{lines}\n\n</details>\n\n"


# Build the changelog with collapsible sections
changelog = "# Changelog\n\n"
changelog += wrap_details("Added", added)
changelog += wrap_details("Removed", removed)
changelog += wrap_details("Updated", updated)

# Write to file
with open("CHANGELOG.md", "w", encoding="utf-8") as f:
    f.write(changelog)

print("Collapsible changelog generated successfully!")


print("Changelog generated successfully!")
