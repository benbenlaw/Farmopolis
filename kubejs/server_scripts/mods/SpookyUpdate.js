//Spooky Update
ServerEvents.recipes(event => {

    //Jelly Beans
    event.shapeless('trickortreat:jelly_beans', [
        'twilightforest:magic_beans', 'usefulslime:jello', 'minecraft:cocoa_beans', 'actuallyadditions:coffee_beans'
    ]).id('farmopolis:jelly_beans')

    //Stone Candy
    event.shaped('trickortreat:stone_candy', [' A ', 'ABA', ' A '], {
        A: 'minecraft:stone',
        B: 'magic_vibe_decorations:candy',
    }).id('farmopolis:stone_candy')

    //Taffy
    event.shapeless('trickortreat:taffy', ['minecraft:sugar', 'minecraft:sugar', 'minecraft:sugar', 'create_chocolate:butter', 'create_chocolate:vanilla_powder', 'create:wheat_flour', 'alltheores:salt', 'minecraft:orange_dye', 'minecraft:yellow_dye']).id('farmopolis:taffy')

    //Lollipop
    event.shaped('trickortreat:lollipop', ['  A', ' B ', 'B  '], {
        A: 'magic_vibe_decorations:candy',
        B: 'create_chocolate:vanilla_lusk',
    }).id('farmopolis:lollipop')

    //Nougat
    event.shapeless('trickortreat:nougat_swirl', ['minecraft:stick', 'minecraft:sugar', 'minecraft:honey_bottle', 'minecraft:egg', 'create_chocolate:almond']).id('farmopolis:nougat_swirl')

    //Pumpkin Cake
    event.shaped('trickortreat:creepy_cake', ['A', 'B'], {
        A: 'minecraft:carved_pumpkin',
        B: 'minecraft:cake'
    }).id('farmopolis:creepy_cake')

})