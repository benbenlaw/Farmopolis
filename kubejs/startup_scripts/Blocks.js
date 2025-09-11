// Blocks

Platform.getInfo('farmopolis').name = 'Farmopolis'

StartupEvents.registry("block", (event) => {

    event.create('farmopolis:reinforced_obsidian')
        .hardness(50)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth('bblcore:nether_portal_frame')
        .stoneSoundType()
        .fullBlock(true)

    event.create('farmopolis:reinforced_glowstone')
        .hardness(50)
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBlock('minecraft:mineable/pickaxe')
        .tagBoth('aether:aether_portal_blocks')
        .stoneSoundType()
        .fullBlock(true)
})
