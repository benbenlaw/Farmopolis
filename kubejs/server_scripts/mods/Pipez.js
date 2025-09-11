ServerEvents.recipes(event => {

    //Energy Pipe
    event.shaped('8x pipez:energy_pipe', ['AAA', 'BBB', 'AAA'], {
        A: '#c:ingots/lead',
        B: '#c:dusts/redstone'
    }).id('pipez:energy_pipe')

    //Fluid Pipe
    event.shaped('8x pipez:fluid_pipe', ['AAA', 'BBB', 'AAA'], {
        A: '#c:ingots/aluminum',
        B: '#c:glass_blocks'
    }).id('pipez:fluid_pipe')

    //Item Pipe
    event.shaped('8x pipez:item_pipe', ['AAA', '   ', 'AAA'], {
        A: '#c:ingots/bronze'
    }).id('pipez:item_pipe')
})