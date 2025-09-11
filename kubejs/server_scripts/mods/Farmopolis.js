ServerEvents.recipes(event => {

    //Nether Fish Platter
    event.shapeless('farmopolis:nether_fish_platter', ['netherdepthsupgrade:soulsucker', 'netherdepthsupgrade:glowdine', 'netherdepthsupgrade:lava_pufferfish', 'netherdepthsupgrade:magmacubefish', 'netherdepthsupgrade:blazefish', 'netherdepthsupgrade:wither_bonefish', 'netherdepthsupgrade:bonefish', 'netherdepthsupgrade:searing_cod', 'netherdepthsupgrade:obsidianfish']).id('farmopolis:nether_fish_platter')

    //Upgrade Base
    event.shaped('bblcore:upgrade_base', ['AAA','ABA', 'AAA'], {
        A: 'minecraft:iron_ingot', 
        B: 'minecraft:gold_ingot'
    }).id('bblcore:upgrade_base')

    //Bread
    event.smelting('minecraft:bread', '#c:doughs').id('farmopolis:bread')

    //Licenses
    event.shaped('farmopolis:baker_license', ['AAA','ABA', 'AAA'], {
        A: 'minecraft:bread', 
        B: '#c:plates/iron'
    }).id('farmopolis:baker_license')
})