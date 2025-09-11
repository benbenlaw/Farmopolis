ServerEvents.recipes(event => {

    //Remove Minecraft Recipes
    event.remove({id: 'minecraft:bread'})
    event.remove({id: 'minecraft:cake'})
})