ServerEvents.recipes(event => {

    // Summoning Block
    event.recipes.opolisutilities.summoning_block("minecraft:beef", "minecraft:netherrack", "minecraft:hoglin")

    // Opolis Utilities Resource Generator
    event.recipes.opolisutilities.resource_generator("minecraft:dirt").id("farmopolis:dirt")
    event.recipes.opolisutilities.resource_generator("minecraft:calcite").id("farmopolis:calcite")

    // Catalogue - B Bucks

    let saplings = Ingredient.of('#minecraft:saplings').itemIds
    saplings.forEach(element => {

        let noNameSpace = element.toString().replace(':', '_')

        event.recipes.opolisutilities.catalogue(element, "1x opolisutilities:b_bucks").id(`farmopolis:catalogue/bucks/${noNameSpace}`)
    })

    event.recipes.opolisutilities.catalogue("cloche:cloche", "6x opolisutilities:b_bucks").id("farmopolis:catalogue/bucks/cloche")
    event.recipes.opolisutilities.catalogue("cookingforblockheads:cow_jar", "12x opolisutilities:b_bucks").id("farmopolis:catalogue/bucks/cow_jar")
    
    // Catalogue - Baker Bucks
    event.recipes.opolisutilities.catalogue("cloche:cloche", "12x farmopolis:baker_bucks").id("farmopolis:catalogue/baker/cloche")
    event.recipes.opolisutilities.catalogue("extendedcrafting:black_iron_ingot", "6x farmopolis:baker_bucks").id("farmopolis:catalogue/baker/black_iron")

    // Catalogue - Cheese Bucks
    event.recipes.opolisutilities.catalogue("cloche:cloche", "12x farmopolis:cheese_bucks").id("farmopolis:catalogue/cheese/cloche")
    event.recipes.opolisutilities.catalogue("cookingforblockheads:cow_jar", "12x farmopolis:cheese_bucks").id("farmopolis:catalogue/cheese/cow_jar")
    event.recipes.opolisutilities.catalogue("extendedcrafting:black_iron_ingot", "6x farmopolis:cheese_bucks").id("farmopolis:catalogue/cheese/black_iron")

    // Catalogue - Brewing Bucks
    event.recipes.opolisutilities.catalogue("cloche:cloche", "12x farmopolis:brewing_bucks").id("farmopolis:catalogue/brewing/cloche")
    event.recipes.opolisutilities.catalogue("extendedcrafting:black_iron_ingot", "6x farmopolis:brewing_bucks").id("farmopolis:catalogue/brewing/black_iron")

    // Catalogue - Nether Bucks
    event.recipes.opolisutilities.catalogue("cloche:cloche", "12x farmopolis:nether_bucks").id("farmopolis:catalogue/nether/cloche")
    event.recipes.opolisutilities.catalogue("extendedcrafting:black_iron_ingot", "6x farmopolis:nether_bucks").id("farmopolis:catalogue/nether/black_iron")

    // Catalogue - Twilight Bucks
    event.recipes.opolisutilities.catalogue("cloche:cloche", "12x farmopolis:twilight_bucks").id("farmopolis:catalogue/twilight/cloche")
    event.recipes.opolisutilities.catalogue("extendedcrafting:black_iron_ingot", "6x farmopolis:twilight_bucks").id("farmopolis:catalogue/twilight/black_iron")

})