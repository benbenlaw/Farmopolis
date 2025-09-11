ServerEvents.recipes(event => {

    //Remove Mystical Agriculture Recipes
    event.remove({id: 'mysticalagriculture:essence/gems/ruby'})
    event.remove({id: 'mysticalagriculture:essence/gems/sapphire'})
    event.remove({id: 'mysticalagriculture:essence/gems/peridot'})
    event.remove({id:'mysticalagriculture:prosperity_gemstone'})
    event.remove({id:'mysticalagriculture:prosperity_seed_base'})
    event.remove({id:'mysticalagriculture:air_agglomeratio'})
    event.remove({id:'mysticalagriculture:water_agglomeratio'})
    event.remove({id:'mysticalagriculture:earth_agglomeratio'})
    event.remove({id:'mysticalagriculture:fire_agglomeratio'})
    event.remove({id:'mysticalagriculture:seed/infusion/fire'})
    event.remove({id:'mysticalagriculture:seed/infusion/earth'})
    event.remove({id:'mysticalagriculture:seed/infusion/water'})
    event.remove({id:'mysticalagriculture:seed/infusion/air'})
    event.remove({id:'mysticalautomation:farmer'})

    //Inferium Recipe
    event.replaceInput({id: 'mysticalagriculture:inferium_seeds'}, "minecraft:wheat_seeds", "mysticalagriculture:prosperity_seed_base")

    //Inferium Gemstone Recipe
    event.shaped('mysticalagriculture:inferium_gemstone', [' A ', 'ABA', ' A '], {
        A: 'mysticalagriculture:inferium_block',
        B: 'mysticalagriculture:prosperity_gemstone'
    }).id('mysticalagriculture:inferium_gemstone')

    //Altar
    event.replaceInput({id: 'mysticalagriculture:infusion_altar'}, 'minecraft:red_wool', 'mysticalagriculture:awakened_supremium_essence')
    event.replaceInput({id: 'mysticalagriculture:awakening_altar'}, 'minecraft:orange_wool', "mysticalagriculture:cognizant_dust")

    //Essence Vessel
    event.shaped('mysticalagriculture:essence_vessel', ['ABA', ' A ', 'AAA'], {
        A: 'mysticalagriculture:soulstone',
        B: "#c:glass_blocks"
    }).id('farmopolis:essence_vessel')

    //Resource Recipes Remove
    event.remove({id:'/mysticalagriculture:essence/common/*'})


})