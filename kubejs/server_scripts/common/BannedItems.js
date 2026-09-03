// Banned Tags

ServerEvents.tags('item', (event) => {

    // Banned Tags
    event.add("farmopolis:banned_items").add(["opolisutilities:cloche", "opolisutilities:smart_crafting_table", 'opolisutilities:catalogue', 'opolisutilities:catalogue_book', 'opolisutilities:basic_loot_box'])
    event.add("farmopolis:banned_items").add("actuallyadditions:tiny_coal")
    event.add("farmopolis:banned_items").add("actuallyadditions:tiny_charcoal")
    event.add("farmopolis:banned_items").add("actuallyadditions:lens_of_the_miner")
    event.add("farmopolis:banned_items").add("minecolonies:supplycampdeployer")
    event.add("farmopolis:banned_items").add("minecolonies:supplychestdeployer")
    event.add("farmopolis:banned_items").add("incubation:fried_egg")
    event.add("farmopolis:banned_items").add("farmers_delight_christmas_editio:candy_cane")
    event.add("farmopolis:banned_items").add('farmersdelight:wheat_dough')


})


// Banned Recipes
ServerEvents.recipes(event => {
    //Remove Banned Items
    event.remove({ output: '#farmopolis:banned_items' })
    //event.remove({input: '#farmopolis:banned_items'})

})


