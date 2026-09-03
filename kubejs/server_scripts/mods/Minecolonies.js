//Minecolonies
ServerEvents.recipes(event => {

    //Additional Recipes
    event.shaped('minecolonies:golden_bread', ['AAA','ABA','AAA'], {
        A: 'minecraft:gold_ingot',
        B: 'minecraft:bread'
    }).id("farmopolis:golden_bread")

    event.shaped('minecolonies:milky_bread', [' B ','BAB',' B '], {
        A: ['minecraft:milk_bucket', 'ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"minecraft:milk"}]'],
        B: 'minecraft:bread'
    }).id("farmopolis:milky_bread")

    //Cornmeal recipe will be replaced by milling/crushing recipes
    event.remove('minecolonies:cornmeal')

    // Use cultural delights tortillas instead
    event.remove('minecolonies:tortillas')

})
