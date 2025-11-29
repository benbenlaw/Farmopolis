ServerEvents.recipes(event => {

  //Ultimine Support for create recipes
  
  event.remove({id: 'create:item_application/andesite_casing_from_log'})
  event.remove({id: 'create:item_application/andesite_casing_from_wood'})
  event.remove({id: 'create:item_application/copper_casing_from_log'})
  event.remove({id: 'create:item_application/copper_casing_from_wood'})
  event.remove({id: 'create:item_application/brass_casing_from_log'})
  event.remove({id: 'create:item_application/brass_casing_from_wood'})

  createAssist("#c:stripped_logs", "create:andesite_alloy", "create:andesite_casing", false, true)
  createAssist("#c:stripped_woods", "create:andesite_alloy", "create:andesite_casing", false, true)
  createAssist("#c:stripped_logs", "minecraft:copper_ingot", "create:copper_casing", false, true)
  createAssist("#c:stripped_woods", "minecraft:copper_ingot", "create:copper_casing", false, true)
  createAssist("#c:stripped_logs", "alltheores:brass_ingot", "create:brass_casing", false, true)
  createAssist("#c:stripped_woods", "alltheores:brass_ingot", "create:brass_casing", false, true)
  createAssist("#c:stripped_woods", "alltheores:brass_ingot", "create:brass_casing", false, true)

  function createAssist(targetBlockTag, heldItem, output, damage, consume) {
    event.custom({
      "type": "inworldrecipes:block_interaction",
      "click_type": "right",
      "target_block_state": targetBlockTag,
      "held_item": {
        "item": heldItem
      },
      "output_block_state": {
        "Name": output
      },
      "damage_held_item": damage,
      "consume_held_item": consume,
      "pop_items": false
    }).id(`farmopolis:inworldrecipes/${output.split(':')[1]}from_${heldItem.split(':')[1]}_on_${targetBlockTag.replace('#c:','')}`)
  }


  //Air Seed
    event.recipes.inworldrecipes.block_interaction("right",
    "minecraft:wheat[age=0]", "mysticalagriculture:air_agglomeratio", false, true, false, false)
      .outputBlockState("mysticalagriculture:air_crop[age=0]")
      .id('farmopolis:inworldrecipes/air_seed')

  //Water Seed
  event.recipes.inworldrecipes.block_interaction("right",
    "minecraft:wheat[age=0]", "mysticalagriculture:water_agglomeratio", false, true, false, false)
      .outputBlockState("mysticalagriculture:water_crop[age=0]")
      .id('farmopolis:inworldrecipes/water_seed')

  //Earth Seed
  event.recipes.inworldrecipes.block_interaction("right",
    "minecraft:wheat[age=0]", "mysticalagriculture:earth_agglomeratio", false, true, false, false)
      .outputBlockState("mysticalagriculture:earth_crop[age=0]")
      .id('farmopolis:inworldrecipes/earth_seed')

  //Fire Seed
    event.recipes.inworldrecipes.block_interaction("right",
      "minecraft:wheat[age=0]", "mysticalagriculture:fire_agglomeratio", false, true, false, false)
        .outputBlockState("mysticalagriculture:fire_crop[age=0]")
        .id('farmopolis:inworldrecipes/fire_seed')

  //Bamboo to Powdered Cannon
  event.recipes.inworldrecipes.block_interaction("right",
    "minecraft:bamboo", "minecraft:blaze_powder", false, true, false, false)
      .outputBlockState("mynethersdelight:powdery_cannon")
      .id('farmopolis:inworldrecipes/bamboo_to_powdery_cannon')
  
  //Almond Leaves
  event.recipes.inworldrecipes.block_interaction("right",
    "create_chocolate:almond_leaves[full=false]", "minecraft:bone_meal", false, true, false, false)
      .outputBlockState("create_chocolate:almond_leaves[full=true, persistent=true, waterlogged=false]")
      .id('farmopolis:inworldrecipes/almond_leaves')
    
  //Empowered Canola Oil
  event.custom({
    "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
    "dropped_item":
      {
        "item": "actuallyadditions:empowered_canola_seed"
      }
    ,
    "fluid": "actuallyadditions:crystallized_oil",
    "new_fluid": "actuallyadditions:empowered_oil",
	  "destroy_items": true
  }).id('farmopolis:inworldrecipes/empowered_canola_oil')

  //Crystallized Oil
  event.custom({
    "type": "inworldrecipes:drop_item_in_fluid_converts_fluid",
    "dropped_item":
      {
        "item": "actuallyadditions:crystallized_canola_seed"
      }
    ,
    "fluid": "actuallyadditions:refined_canola_oil",
    "new_fluid": "actuallyadditions:crystallized_oil",
	  "destroy_items": true
  }).id('farmopolis:inworldrecipes/crystallized_oil')

  //Removed Default Recipe
  event.remove({mod: 'inworldrecipes'})

    

})