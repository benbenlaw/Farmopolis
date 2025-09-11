//Minecolonies
ServerEvents.recipes(event => {

    //Additional Recipes
    event.shaped('minecolonies:golden_bread', ['AAA','ABA','AAA'], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:bread'
    }).id("farmopolis:golden_bread")

})