ServerEvents.recipes(event => {

    //Andesite Alloy
    event.recipes.casting.solidifier('minecraft:andesite', '20x casting:molten_zinc', 'create:andesite_alloy')
        .id('farmopolis:casting/solidifier/andesite_alloy_zinc')
    event.recipes.casting.solidifier('minecraft:andesite', '20x casting:molten_iron', 'create:andesite_alloy')
        .id('farmopolis:casting/solidifier/andesite_alloy_iron')

    //Ethetic Quartz
    event.recipes.casting.solidifier('minecraft:oxidized_copper', '250x casting:molten_black_quartz', 'actuallyadditions:ethetic_green_block')
        .id('farmopolis:casting/solidifier/ethetic_green_block')
    event.recipes.casting.solidifier('minecraft:chiseled_stone_bricks', '250x casting:molten_black_quartz', 'actuallyadditions:ethetic_white_block')
        .id('farmopolis:casting/solidifier/ethetic_white_block')

    //Blank Gemstone
    event.recipes.casting.solidifier('casting:gem_mold', '1000x casting:molten_stone', 'farmopolis:blank_gemstone')
        .id('farmopolis:casting/solidifier/blank_gemstone')

    //Experience Seeds
    event.recipes.casting.solidifier('mysticalagriculture:inferium_seeds', '250x casting:molten_experience', 'mysticalagriculture:experience_seeds')
        .id('farmopolis:casting/solidifier/experience_seeds_1')
    event.recipes.casting.solidifier('mysticalagriculture:inferium_seeds', '250x sophisticatedcore:xp_still', 'mysticalagriculture:experience_seeds')
        .id('farmopolis:casting/solidifier/experience_seeds_2')
    event.recipes.casting.solidifier('mysticalagriculture:inferium_seeds', '250x create_enchantment_industry:experience', 'mysticalagriculture:experience_seeds')
        .id('farmopolis:casting/solidifier/experience_seeds_3')

    

    //Experience
    event.recipes.casting.melting('mysticalagriculture:experience_essence', '10x casting:molten_experience', 750)
        .id('farmopolis:casting/melting/experience')
})