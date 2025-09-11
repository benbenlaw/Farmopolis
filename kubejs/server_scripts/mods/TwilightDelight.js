ServerEvents.recipes(event => {

    //Replace Twilight Delight Recipes
    event.replaceInput({id: 'twilightdelight:chocolate_wafer'}, 'minecraft:cocoa_beans', 'create:bar_of_chocolate')

    event.shapeless('twilightdelight:chocolate_113', ['twilightdelight:experiment_113', 'create:chocolate_bucket'])
        .id('twilightdelight:chocolate_113')


})