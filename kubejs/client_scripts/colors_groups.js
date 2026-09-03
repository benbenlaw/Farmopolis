const colors = [
    "red", "green", "blue", "yellow", "purple", "cyan", "white",
    "orange", "magenta", "light_blue", "lime", "pink", "gray",
    "light_gray", "black", "brown"
];

const woodRoots = [
    "plank", "log", "wood", "stripped_log", "stripped_wood"
];

const bambooRoots = [
    "bamboo", "stripped_bamboo"
];

const stoneRoots = [
    "stone", "braid", "polished", "tile", "prismarine", "dark_prismarine",
    "cracked_stone", "brick", "cobblestone", "marble", "chaotic", "mosaic",
    "triple", "encased", "road", "asteroid"
];

const typeGroups = [
    "dirt",
    "grass_block",
    "crafting_table",
    "tall_grass",
    "short_grass",
    "poppy",
    "dandelion",
    "leaves",
    "sapling",
    "apple",
    "spray_can"
];

/*
function formatName(str) {
    return str.split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
*/

RecipeViewerEvents.groupEntries('item', event => {

    // 1. Group by Colors
    colors.forEach(color => {

        let colorText = Text.translate(`color.minecraft.${color}`);

        let woodFilters = woodRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(woodFilters, `colors:colors_${color}_wood`, Text.translate('group.colors.colors.wood', colorText));

        let bambooFilters = bambooRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(bambooFilters, `colors:colors_${color}_bamboo`, Text.translate('group.colors.colors.bamboo', colorText));

        let stoneFilters = stoneRoots.map(root => {
            return { itemNamespace: 'colors', itemPathStartsWith: `${color}_${root}` };
        });
        event.group(stoneFilters, `colors:colors_${color}_stone`, Text.translate('group.colors.colors.stone', colorText));

    });

    // 2. Group by Types
    typeGroups.forEach(typeSuffix => {
        event.group(
            { itemNamespace: 'colors', itemPathEndsWith: typeSuffix },

            `colors:colors_type_${typeSuffix}`,

            Text.translate(`group.colors.type.${typeSuffix}`)
        );
    });

});