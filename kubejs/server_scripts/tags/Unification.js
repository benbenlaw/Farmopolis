// Unificiation Recipes
ServerEvents.recipes(event => {

    event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')
    
    colors.forEach(color => {
        event.replaceInput({}, `minecraft:${color}_dye`, `#c:dyes/${color}`)
    })


    // Remove Recipes
    event.remove({id: 'bucketlib:create/dough'})
    event.remove({id: 'farmersdelight:wheat_dough'})
    event.remove({id: 'create:crafting/appliances/dough'})
    event.remove({id: 'incubation:fried_egg_from_campfire_cooking'})
    event.remove({id: 'incubation:fried_egg_from_smoking'})
    event.remove({id: 'incubation:fried_egg'})
})

// Unification Tags
ServerEvents.tags('item', (event) => {

    event.get("c:doughs/wheat").add(['farmersdelight:wheat_dough', 'actuallyadditions:rice_dough', 'minecolonies:bread_dough'])

    event.get("c:doughs").add(['#c:foods/dough'])

    event.get("c:dusts/cocoa").add(['create_chocolate:cocoa_powder'])
    event.get("c:cocoa_butter").add(['create_chocolate:cocoa_butter'])
    event.get("c:crushed_cocoa").add(['create_chocolate:cocoa_smashed_beans'])

})


