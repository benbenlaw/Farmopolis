ServerEvents.recipes(event => {

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
    
  //Almond Leaves Harvest

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

  //TEMP Chicken Roost Fix until the mod fixes it 
  event.custom({
    "type": "inworldrecipes:right_click_on_entity_transforms_item",
    "held_item":
      {
        "item": "create_integrated_farming:roost",
        "count": 1
      }
    ,
    "entity": "minecraft:chicken",
    "damage_held_item": false,
    "consume_held_item": true,
    "destroy_entity": true,
    "pop_item": false,
    "results": [
      {
        "item": {
          "count": 1,
          "id": "create_integrated_farming:chicken_roost"
        }
      }
    ]
  })

  //Removed Default Recipe
  event.remove({mod: 'inworldrecipes'})

    

})