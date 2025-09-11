ServerEvents.recipes(event => {

    //Market
    event.shaped('market:market', ['ABA', 'BCB', 'ABA'], {
        A: '#c:plates/iron',
        B: '#c:plates/gold',
        C: 'create:andesite_casing'
    }).id('farmopolis:market/market')

    //Bread
    event.recipes.market.market("farmopolis:baker_license", "64x #farmopolis:baker_license_goods", 0, 
        "1x farmopolis:baker_bucks").id("farmopolis:market/bread")
    //Cheese
    event.recipes.market.market("farmopolis:cheese_license", "64x #farmopolis:cheese_license_goods", 0, 
        "1x farmopolis:cheese_bucks").id("farmopolis:market/cheese")
    //Brewing
    event.recipes.market.market("farmopolis:brewing_license", "64x #farmopolis:brewing_license_goods", 0, 
        "1x farmopolis:brewing_bucks").id("farmopolis:market/brewing")
    //Nether
    event.recipes.market.market("farmopolis:nether_license", "64x #farmopolis:nether_license_goods", 0, 
        "1x farmopolis:nether_bucks").id("farmopolis:market/nether")
    //Twilight
    event.recipes.market.market("farmopolis:twilight_license", "64x #farmopolis:twilight_license_goods", 0, 
        "1x farmopolis:twilight_bucks").id("farmopolis:market/twilight")
})