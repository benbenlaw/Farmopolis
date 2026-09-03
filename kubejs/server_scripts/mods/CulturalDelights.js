ServerEvents.recipes(event => {

    event.replaceInput({input: '#culturaldelights:avocados'}, '#culturaldelights:avocados', '#c:foods/avocado')
    event.replaceInput({input: 'culturaldelights:cucumber'}, 'culturaldelights:cucumber', '#c:foods/cucumber')
    event.replaceInput({input: 'culturaldelights:eggplant'}, 'culturaldelights:eggplant', '#c:foods/eggplant')
    event.replaceInput({input: 'culturaldelights:tortilla'}, 'culturaldelights:tortilla', '#c:foods/tortilla')
    event.replaceInput({id: 'culturalrecipes:avocado_toast'}, 'minecraft:bread', '#c:foods/toast')
    event.replaceInput({id: 'culturalrecipes:corn_dough'}, 'culturaldelights:corn_cob', 'minecolonies:cornmeal')
    event.replaceInput({id: 'culturalrecipes:corn_cob_crate'}, 'culturaldelights:corn_cob', '#c:foods/corn')
})
