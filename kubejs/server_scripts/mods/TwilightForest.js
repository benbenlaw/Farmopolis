ServerEvents.recipes(event => {

    //Map
    event.replaceInput({id: 'twilightforest:magic_map_focus'}, 'twilightforest:raven_feather', '#c:feathers')

    //Transformation Powder
    event.shapeless('twilightforest:transformation_powder', [
        'farmopolis:ur_ghast_essence',
        'farmopolis:naga_essence',
        'farmopolis:lich_essence',
        'farmopolis:minoshroom_essence',
        'farmopolis:hydra_essence',
        'farmopolis:knight_phantom_essence',
        'farmopolis:alpha_yeti_essence',
        'farmopolis:quest_ram_essence',
        'farmopolis:snow_queen_essence'
    ]).id('farmopolis:transformation_powder')
    

    //Infested Towerwood
    event.shaped('4x twilightforest:infested_towerwood', [' A ', 'ABA', ' A '], {
        A: '#twilightforest:towerwood',
        B: 'twilightforest:transformation_powder'
    }).id('farmopolis:infested_towerwood')

    //Essence to Twilight Forest Items
    event.shaped('2x twilightforest:aurora_block', [' A ', 'A A', ' A '], {
        A: 'farmopolis:snow_queen_essence'
    }).id('farmopolis:aurora_block')

    event.shaped('2x twilightforest:fiery_tears', [' A ', 'ABA', ' A '], {
        A: 'farmopolis:ur_ghast_essence',
        B: 'minecraft:glass_bottle'
    }).id('farmopolis:fiery_tears')

    event.shaped('4x twilightforest:arctic_fur', ['AAA', 'AAA'], {
        A: 'farmopolis:alpha_yeti_essence'
    }).id('farmopolis:arctic_fur')

    event.shaped('4x twilightforest:naga_scale', ['AAA'], {
        A: 'farmopolis:naga_essence'
    }).id('farmopolis:naga_scale')

    event.shaped('4x twilightforest:raw_meef', ['AAA'], {
        A: 'farmopolis:minoshroom_essence'
    }).id('farmopolis:raw_meef')

    event.shaped('2x twilightforest:hydra_chop', ['AAA'], {
        A: 'farmopolis:hydra_essence'
    }).id('farmopolis:hydra_chop')

    event.shaped('2x twilightforest:experiment_115', ['AAA'], {
        A: 'farmopolis:ur_ghast_essence'
    }).id('farmopolis:experiment_115')

    event.shaped('2x twilightdelight:experiment_113', [' A ', 'A A'], {
        A: 'farmopolis:ur_ghast_essence'
    }).id('farmopolis:experiment_113')
    
    event.shaped('1x twilightdelight:experiment_110', ['AAA', 'A A', 'AAA'], {
        A: 'farmopolis:ur_ghast_essence'
    }).id('farmopolis:experiment_110')

    event.shaped('2x twilightforest:ice_bomb', ['AAA'], {
        A: 'farmopolis:alpha_yeti_essence'
    }).id('farmopolis:ice_bomb')

    event.shaped('2x twilightforest:ice_bomb', ['AAA'], {
        A: 'farmopolis:snow_queen_essence'
    }).id('farmopolis:ice_bomb_snow')




    //Trophies
    event.shaped('twilightforest:ur_ghast_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:ur_ghast_essence'
    }).id('farmopolis:ur_ghast_trophy')

    event.shaped('twilightforest:naga_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:naga_essence'
    }).id('farmopolis:naga_trophy')

    event.shaped('twilightforest:lich_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:lich_essence'
    }).id('farmopolis:lich_trophy')

    event.shaped('twilightforest:minoshroom_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:minoshroom_essence'
    }).id('farmopolis:minoshroom_trophy')

    event.shaped('twilightforest:hydra_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:hydra_essence'
    }).id('farmopolis:hydra_trophy')

    event.shaped('twilightforest:knight_phantom_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:knight_phantom_essence'
    }).id('farmopolis:knight_phantom_trophy')

    event.shaped('twilightforest:alpha_yeti_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:alpha_yeti_essence'
    }).id('farmopolis:alpha_yeti_trophy')

    event.shaped('twilightforest:quest_ram_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:quest_ram_essence'
    }).id('farmopolis:quest_ram_trophy')

    event.shaped('twilightforest:snow_queen_trophy', ['AAA', 'AAA', 'AAA'], {
        A: 'farmopolis:snow_queen_essence'
    }).id('farmopolis:snow_queen_trophy')




})