ServerEvents.recipes(event => {

    //Snad Receipes
    event.shaped('snad:snad', [' A ', 'ABA', ' A '], {
        A: 'minecraft:sand',
        B: 'mysticalagriculture:inferium_essence'
    }).id('snad:snad')

    event.shaped('snad:red_snad', [' A ', 'ABA', ' A '], {
        A: 'minecraft:red_sand',
        B: 'mysticalagriculture:inferium_essence'
    }).id('snad:red_snad')

    event.shaped('snad:suol_snad', [' A ', 'ABA', ' A '], {
        A: 'minecraft:soul_sand',
        B: 'mysticalagriculture:inferium_essence'
    }).id('snad:suol_snad')

})