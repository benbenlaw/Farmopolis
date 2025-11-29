ServerEvents.recipes(event => {

    //Replace Input
    event.replaceInput({id: 'shops:shop'}, '#c:stones', '#c:cobblestones')

    event.shapeless('shops:copper_coin', ['opolisutilities:b_bucks']).id('farmopolis:shops/convert_b_bucks_to_copper_coin')

})