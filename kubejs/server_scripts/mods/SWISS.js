ServerEvents.recipes(event => {

    //Item Panel
    event.shaped('1x swiss:storage_item_panel', ['ABA', 'BCB', 'ABA'], {
        A: 'actuallyadditions:enori_crystal',
        B: 'minecraft:lapis_block',
        C: 'actuallyadditions:diamatine_crystal'
    }).id('swiss:storage_item_panel')

    //Item Interface
    event.shaped('1x swiss:storage_item_interface', ['ABA', 'BCB', 'ABA'], {
        A: 'actuallyadditions:enori_crystal',
        B: 'actuallyadditions:restonia_crystal',
        C: '#c:chests/wooden'
    }).id('swiss:storage_item_interface')

    //Item Exporter
    event.shaped('1x swiss:exporter_item_interface', ['ABA', 'BCB', 'ABA'], {
        A: 'actuallyadditions:enori_crystal',
        B: 'actuallyadditions:void_crystal',
        C: 'minecraft:hopper'
    }).id('swiss:exporter_item_interface')

    //Item Importer
    event.shaped('1x swiss:importer_item_interface', ['ABA', 'BCB', 'ABA'], {
        A: 'actuallyadditions:enori_crystal',
        B: 'actuallyadditions:palis_crystal',
        C: 'minecraft:hopper'
    }).id('swiss:importer_item_interface')

})