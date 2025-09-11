// Items

StartupEvents.registry("item", (event) => {

    //Misc Items
    event.create('farmopolis:blank_gemstone')
    event.create('farmopolis:nether_fish_platter').food(food => {
        food.nutrition(16)
        food.saturation(1)
    })

    //Twilight Forest Essence
    event.create('farmopolis:ur_ghast_essence')
    event.create('farmopolis:naga_essence')
    event.create('farmopolis:lich_essence')
    event.create('farmopolis:minoshroom_essence')
    event.create('farmopolis:hydra_essence')
    event.create('farmopolis:knight_phantom_essence')
    event.create('farmopolis:alpha_yeti_essence')
    event.create('farmopolis:quest_ram_essence')
    event.create('farmopolis:snow_queen_essence')

    //Twilight Forest Topper Activator
    event.create("farmopolis:twilight_top_key", 'roomopolis_key').templateId("farmopolis:twilight_top")
        .keyBlock("roomopolis:room_key_block").heightAdjustment(4).consumeKey(true).removeDoor(true).blocksRequired(false).texture("minecraft:item/paper")

    //Licenses
    event.create('farmopolis:baker_license').tag(['market:licenses', 'farmopolis:license'])
    event.create('farmopolis:baker_bucks')
    event.create('farmopolis:cheese_license').tag(['market:licenses', 'farmopolis:license'])
    event.create('farmopolis:cheese_bucks')
    event.create('farmopolis:brewing_license').tag(['market:licenses', 'farmopolis:license'])
    event.create('farmopolis:brewing_bucks')
    event.create('farmopolis:nether_license').tag(['market:licenses', 'farmopolis:license'])
    event.create('farmopolis:nether_bucks')
    event.create('farmopolis:twilight_license').tag(['market:licenses', 'farmopolis:license'])
    event.create('farmopolis:twilight_bucks')

    //Ultimate Food
    event.create('farmopolis:ultimate_apple')
    event.create('farmopolis:ultimate_bread')
    event.create('farmopolis:ultimate_chocolate')
     
})