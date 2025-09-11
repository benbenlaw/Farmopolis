ServerEvents.recipes(event => {

    //Remove Actually Additions Recipes
    event.replaceInput({id: 'sereneseasons:calendar'}, 'minecraft:clock', '#minecraft:flowers')
    event.replaceInput({id: 'sereneseasons:calendar'}, 'minecraft:paper', '#minecraft:planks')
})