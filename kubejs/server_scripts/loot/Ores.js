console.info("Loading Ores Loot Table...")

LootJS.modifiers(event => {

    //Ores drop Essence
    let ores = Ingredient.of('#c:ores').itemIds

    let oreToEssence = {
        'iron': 'mysticalagriculture:iron_essence',
        'gold': 'mysticalagriculture:gold_essence',
        'copper': 'mysticalagriculture:copper_essence',
        'platinum': 'mysticalagriculture:platinum_essence',
        'tin': 'mysticalagriculture:tin_essence',
        'lapis': 'mysticalagriculture:lapis_lazuli_essence',
        'diamond': 'mysticalagriculture:diamond_essence',
        'emerald': 'mysticalagriculture:emerald_essence',
        'coal': 'mysticalagriculture:coal_essence',
        'zinc': 'mysticalagriculture:zinc_essence',
        'osmium': 'mysticalagriculture:osmium_essence',
        'ruby': 'mysticalagriculture:ruby_essence',
        'sapphire': 'mysticalagriculture:sapphire_essence',
        'peridot': 'mysticalagriculture:peridot_essence',
        'aluminum': 'mysticalagriculture:aluminum_essence',
        'redstone': 'mysticalagriculture:redstone_essence',
        'nickel': 'mysticalagriculture:nickel_essence',
        'lead': 'mysticalagriculture:lead_essence',
        'black_quartz': 'mysticalagriculture:black_quartz_essence',
        'quartz': 'mysticalagriculture:nether_quartz_essence',
        'silver': 'mysticalagriculture:silver_essence',
        'iridium': 'mysticalagriculture:iridium_essence',
        'uranium': 'mysticalagriculture:uranium_essence',
    }

    ores.forEach(ore => {
        let matched = false
        let silkTouch
        let noSilkTouch

        for (let key in oreToEssence) {
            if (ore.includes(key)) {
                silkTouch = LootEntry.of(ore).when(c =>
                    c.matchTool(ItemFilter.anyOf(ItemFilter.hasEnchantment("minecraft:silk_touch"))))

                noSilkTouch = LootEntry.of(oreToEssence[key]).setCount([1, 2]).applyOreBonus("minecraft:fortune").when(c =>
                    c.matchTool(ItemFilter.not(ItemFilter.hasEnchantment("minecraft:silk_touch"))))

                matched = true
                event.addBlockModifier(ore).removeLoot('*')
                    .addAlternativesLoot(silkTouch, noSilkTouch)
                break
            }
        }

        if (!matched) {
            console.log(`No essence found for ${ore}`)
        }
    })

})
