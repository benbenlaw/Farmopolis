ServerEvents.recipes(event => {

    //Compacting 
    compactingRecipes('minecraft:ender_pearl', 1, "opolisutilities:ender_pearl_fragment", 8)
    compactingRecipes('actuallyadditions:black_quartz_block', 1, "actuallyadditions:black_quartz", 4)
    compactingRecipes('minecraft:coal', 1, "opolisutilities:mini_coal", 8)
    compactingRecipes('minecraft:charcoal', 1, "opolisutilities:mini_charcoal", 8)

    function compactingRecipes(input, amount1, output, amount2) {
        event.custom({
            "type": "functionalstorage:custom_compacting",
            "higher_input": {
                "count": amount1,
                "id": input
            },
            "lower_input": {
                "count": amount2,
                "id": output
            }
        })
    }

})