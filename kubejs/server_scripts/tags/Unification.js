// Unificiation Recipes
ServerEvents.recipes(event => {

    event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')

    colors.forEach(color => {
        event.replaceInput({}, `minecraft:${color}_dye`, `#c:dyes/${color}`)
    })

    // Remove Recipes
    event.remove({ id: 'bucketlib:create/dough' })
    event.remove({ id: 'farmersdelight:wheat_dough' })
    event.remove({ id: 'create:crafting/appliances/dough' })
    event.remove({ id: 'incubation:fried_egg_from_campfire_cooking' })
    event.remove({ id: 'incubation:fried_egg_from_smoking' })
    event.remove({ id: 'incubation:fried_egg' })
})

// Unification Tags
ServerEvents.tags('item', (event) => {

    event.get('c:foods/dough/wheat').add(['farmersdelight:wheat_dough', 'actuallyadditions:rice_dough', 'minecolonies:bread_dough'])

    event.get('c:dusts/cocoa').add(['create_chocolate:cocoa_powder'])
    event.get('c:cocoa_butter').add(['create_chocolate:cocoa_butter'])
    event.get('c:crushed_cocoa').add(['create_chocolate:cocoa_smashed_beans'])
    event.get('c:foods/corn').add(['culturaldelights:corn_cob', 'minecolonies:corn'])
    event.get('c:foods/tortilla').add(['culturaldelights:tortilla', 'minecolonies:tortillas'])
    event.get('c:foods/cucumber').add(['culturaldelights:cucumber', 'herbsandharvest:cucumber'])
    event.get('c:foods/avocado').add(['#culturaldelights:avocados'])
    event.get('c:foods/toast').add(['moredelight:toast', 'mynethersdelight:toasts'])
    event.get('c:foods/eggplant').add(['culturaldelights:eggplant', 'culturaldelights:cut_eggplant', 'minecolonies:eggplant'])
    event.get('c:saplings/avocado').add(['culturaldelights:avocado_sapling', 'herbsandharvest:avocado_fruit_sapling'])
    event.get('c:salts').add(['#c:dusts/salt'])

    event.get('c:foods/cake_base_baked').add(['createaddition:cake_base_baked', 'create_chocolate:cake_base_baked', 'ratatouille:cake_base'])
})


