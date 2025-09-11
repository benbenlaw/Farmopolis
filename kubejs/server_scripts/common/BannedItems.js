// Banned Tags

ServerEvents.tags('item', (event) => {

    // Banned Tags
    event.add("farmopolis:banned_items").add("opolisutilities:cloche")
    event.add("farmopolis:banned_items").add("opolisutilities:smart_crafting_table")
    event.add("farmopolis:banned_items").add("actuallyadditions:tiny_coal")
    event.add("farmopolis:banned_items").add("actuallyadditions:tiny_charcoal")
    event.add("farmopolis:banned_items").add("actuallyadditions:lens_of_the_miner")
    event.add("farmopolis:banned_items").add("minecolonies:supplycampdeployer")
    event.add("farmopolis:banned_items").add("minecolonies:supplychestdeployer")
    event.add("farmopolis:banned_items").add("incubation:fried_egg")

})


// Banned Recipes
ServerEvents.recipes(event => {
    //Remove Banned Items
    event.remove({output: '#farmopolis:banned_items'})
    //event.remove({input: '#farmopolis:banned_items'})

})


