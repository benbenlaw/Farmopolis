// Item Tags

ServerEvents.tags('item', (event) => {

    //Apples
    colors.forEach(color => {
        event.get(`farmopolis:apples`).add([`colors:${color}_apple`])
    })
    event.get("farmopolis:apples").add(['minecraft:apple'])

    //Nether Portal Frames
    event.get("bblcore:nether_portal_frame").remove("minecraft:obsidian")

    //Twilight Forest Portal Activator
    event.get("twilightforest:portal/activator")
        .add("mysticalagriculture:awakened_supremium_gemstone").remove("#c:gems/diamond")

    //Aether Portal Frames
    event.get("aether:aether_portal_blocks").remove("minecraft:glowstone")

    //Essences
    event.get('farmopolis:essences').add('#mysticalagriculture:essences')

    //Melting Produces Experience
    event.get('casting:melting_produces_experience').removeAll()
    event.get('casting:melting_produces_experience').add('minecraft:ancient_debris')

    //Tomato
    event.get('c:foods/tomato').add("minecolonies:tomato")
    event.get('c:foods/onion').add("minecolonies:onion")

    //Quartz Enriched Iron
    event.get('c:ingots/quartz_enriched_iron').add('refinedstorage:quartz_enriched_iron')

    //Baker License
    event.get('farmopolis:baker_license_goods').add(['create_chocolate:vegan_chocolate_marshmallow', 'create_chocolate:chocolate_marshmallow', 'create_chocolate:dark_chocolate_marshmallow', 'create_chocolate:white_chocolate_marshmallow', 'create_chocolate:caramel_marshmallow', 'create_chocolate:royal_chocolate_marshmallow', 'create_chocolate:ginger_bread_man', 'create_chocolate:ginger_bread', 'create_chocolate:royal_chocolate_cake', 'create_chocolate:caramel_cake', 'create_chocolate:white_chocolate_cake', 'create_chocolate:dark_chocolate_cake', 'create_chocolate:chocolate_cake', 'create_chocolate:vegan_chocolate_cake', 'create:sweet_roll', 'create_chocolate:vegan_chocolate_truffle', 'create_chocolate:chocolate_truffle', 'create_chocolate:dark_chocolate_truffle', 'create_chocolate:white_chocolate_truffle', 'create_chocolate:caramel_truffle', 'create_chocolate:royal_chocolate_truffle', 'create_chocolate:ginger_bread'])

    //Cheese License
    event.get('farmopolis:cheese_license_goods').add(['create_cheese:brie', 'create_cheese:cabrales', 'create_cheese:camembert', 'create_cheese:cheddar', 'create_cheese:cheshire', 'create_cheese:colby_jack', 'create_cheese:comte', 'create_cheese:crottin_de_chavignol', 'create_cheese:manchego', 'create_cheese:gruyere', 'create_cheese:grana_panado', 'create_cheese:gouda', 'create_cheese:gorgonzola', 'create_cheese:fromage_frais', 'create_cheese:feta', 'create_cheese:emmentaler', 'create_cheese:mozzarella', 'create_cheese:parmigiano_reggiano', 'create_cheese:pecorino_romano', 'create_cheese:provolone', 'create_cheese:reblochon', 'create_cheese:ricotta', 'create_cheese:roquefort', 'create_cheese:swiss', 'create_cheese:tomme_de_savoie', 'create_cheese:mimolette'])

    //Brewing License
    event.get('farmopolis:brewing_license_goods').add(['create_winery:cider', 'create_winery:riesling', 'create_winery:chardonnay', 'create_winery:champaign', 'create_winery:rose', 'create_winery:zinfandel', 'create_winery:pinot_noir', 'create_winery:merlot', 'create_winery:cabernet_sauvignon', 'drinkbeer:beer_mug_blaze_stout', 'drinkbeer:beer_mug_blaze_milk_stout', 'drinkbeer:beer_mug_apple_lambic', 'drinkbeer:beer_mug_sweet_berry_kriek', 'drinkbeer:beer_mug_haars_icey_pale_lager', 'drinkbeer:beer_mug_pumpkin_kvass', 'drinkbeer:beer_mug_night_howl_kvass', 'drinkbeer:beer_mug_frothy_pink_eggnog', 'drinkbeer:beer_mug', 'create_winery:bordeaux', 'create_winery:grape_juice', 'create_winery:apple_juice'])

    //Nether License
    event.get('farmopolis:nether_license_goods').add(['farmopolis:nether_fish_platter', 'mynethersdelight:hot_cream_cone', 'mynethersdelight:hotdog_with_nether_salad', 'mynethersdelight:breakfast_sampler', 'mynethersdelight:spicy_cotton', 'mynethersdelight:roast_stuffed_hoglin', 'mynethersdelight:bleeding_tartar', 'mynethersdelight:nether_burger'])

    //Twilight License
    event.get('farmopolis:twilight_license_goods').add(['twilightdelight:tear_drink', 'twilightdelight:torchberry_juice', 'twilightdelight:thorn_rose_tea', 'twilightdelight:glacier_ice_tea', 'twilightdelight:meef_wellington_block', 'twilightdelight:aurora_pie', 'twilightdelight:glow_113', 'twilightdelight:chocolate_113', 'twilightdelight:honey_113', 'twilightdelight:ghast_brain_salad', 'twilightdelight:fiery_snakes_block', 'twilightdelight:twilight_spring'])

    //Eggs, yeah unifying egg who would have thought it 
    event.get('farmopolis:eggs').add(['#c:cooked_eggs', '#c:foods/cooked_egg'])
})


ServerEvents.tags('block', (event) => {

    //Nether Portal Frames
    event.get("bblcore:nether_portal_frame").remove("minecraft:obsidian")

    //Bumblezone Teleportation
    event.get("the_bumblezone:dimension_teleportation/required_blocks_under_beehive_to_teleport").add("farmopolis:reinforced_glowstone")
})


