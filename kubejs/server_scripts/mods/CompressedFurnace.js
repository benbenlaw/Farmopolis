ServerEvents.recipes(event => {

    //Generators
    event.replaceInput({id: 'compressedfurnace:compressed_generator'}, 'minecraft:redstone', 'minecraft:blaze_rod')
    event.replaceInput({id: 'compressedfurnace:double_compressed_generator'}, 'minecraft:redstone_block', 'minecraft:nether_bricks')
    event.replaceInput({id: 'compressedfurnace:double_compressed_generator'}, 'minecraft:diamond', 'minecraft:diamond_block')
})