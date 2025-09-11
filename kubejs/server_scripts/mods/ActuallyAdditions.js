ServerEvents.recipes(event => {

    //Remove Actually Additions Recipes
    event.remove({id: 'actuallyadditions:rice_dough'})
    event.remove({id: 'actuallyadditions:laser/soul_sand'})
    event.remove({id: 'actuallyadditions:crushing/golden_horse_armor'})
    event.remove({id: 'actuallyadditions:crushing/iron_horse_armor'})
    event.remove({id: 'actuallyadditions:crushing/diamond_horse_armor'})


    //Oil Generator
    event.replaceInput({id: 'actuallyadditions:oil_generator'}, "actuallyadditions:canola", 'actuallyadditions:coal_generator')

    //Iron Casing
    event.shaped('actuallyadditions:iron_casing', ['ABA', 'BCB', 'ABA'], {
        A: '#c:ingots/iron',
        B: '#c:rods/wooden',
        C: 'create:andesite_casing'
    }).id('actuallyadditions:iron_casing')

    //Farmer
    event.shaped('actuallyadditions:farmer', ['ACA', 'CBC', 'ACA'], {
        A: 'actuallyadditions:enori_crystal_block',
        B: 'actuallyadditions:iron_casing',
        C: 'create:mechanical_harvester'
    }).id('actuallyadditions:farmer')

    //Reinforced Obsidian
    event.recipes.actuallyadditions.empowering('farmopolis:reinforced_obsidian', "minecraft:obsidian", [
        "mysticalagriculture:iridium_essence",
        "mysticalagriculture:lead_essence",
        "mysticalagriculture:diamond_essence",
        "mysticalagriculture:platinum_essence",
    ]).energy(24000).color(Color.GREEN.argb).time(60).id('farmopolis:empowering/reinforced_obsidian')
    
    //Prosperity Gemstone
    event.recipes.actuallyadditions.empowering('mysticalagriculture:prosperity_gemstone', "farmopolis:blank_gemstone", [
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
    ]).energy(20000).color(Color.GREEN.argb).time(60).id('farmopolis:empowering/prosperity_shard')        
    
    //Prosperity Seed
    event.recipes.actuallyadditions.empowering('mysticalagriculture:prosperity_seed_base', "#c:seeds", [
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
        "mysticalagriculture:prosperity_shard",
    ]).energy(20000).color(Color.GREEN.argb).time(60).id('farmopolis:empowering/prosperity_seed_base')        
    
    //Air Agglomeratio
    event.recipes.actuallyadditions.empowering('mysticalagriculture:air_agglomeratio', "#c:dusts", [
        "minecraft:glass_bottle",
        "minecraft:dirt",
        "minecraft:gravel",
        "minecraft:clay_ball",
    ]).energy(20000).color(Color.YELLOW.argb).time(60).id('farmopolis:empowering/air_agglomeratio')        

    //Water Agglomeratio
    event.recipes.actuallyadditions.empowering('mysticalagriculture:water_agglomeratio', "#c:dusts", [
        "minecraft:water_bucket",
        "minecraft:sand",
        "minecraft:gravel",
        "minecraft:clay_ball",
    ]).energy(20000).color(Color.BLUE.argb).time(60).id('farmopolis:empowering/water_agglomeratio')

    //Earth Agglomeratio
    event.recipes.actuallyadditions.empowering('mysticalagriculture:earth_agglomeratio', "#c:dusts", [
        "minecraft:short_grass",
        "minecraft:sand",
        "minecraft:dirt",
        "minecraft:clay_ball",
    ]).energy(20000).color(Color.GREEN.argb).time(60).id('farmopolis:empowering/earth_agglomeratio')

    //Fire Agglomeratio
    event.recipes.actuallyadditions.empowering('mysticalagriculture:fire_agglomeratio', "#c:dusts", [
        "minecraft:lava_bucket",
        "minecraft:sand",
        "minecraft:gravel",
        "minecraft:clay_ball",
    ]).energy(20000).color(Color.RED.argb).time(60).id('farmopolis:empowering/fire_agglomeratio')



})