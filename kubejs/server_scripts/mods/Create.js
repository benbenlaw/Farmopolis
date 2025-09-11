ServerEvents.recipes(event => {

  //Create -  Cheese Factory - Cheese Cellar
  event.shaped('create_cheese:cheese_cellar', ['ABA', 'ACA', 'DDD'], {
      A: '#minecraft:planks',
      B: '#minecraft:wooden_slabs',
      C: 'create_cheese:soft_curd_cheese',
      D: '#c:stones'
  }).id('create_cheese:cheese_cellar_recipe')

  //Create Remove Resources Recipes
  event.remove({id: 'create_cheese:cheese_curds_smelting'})
  event.remove({id: 'create_cheese:cheese_curds_smoking'})

  event.remove({id: 'create:splashing/gravel'})
  event.remove({id: 'create:splashing/red_sand'})
  event.remove({id: 'create:crushing/tuff'})
  event.remove({id: 'create:crushing/tuff_recycling'})
  event.remove({id: 'create:crushing/ochrum'})
  event.remove({id: 'create:crushing/ochrum_recycling'})
  event.remove({id: 'create:crushing/veridium_recycling'})
  event.remove({id: 'create:crafting/curiosities/cake'})
  event.remove({id: 'create:crafting/materials/andesite_alloy_from_zinc'})
  event.remove({id: 'create:crafting/materials/andesite_alloy'})

  event.remove({id: 'create:crushing/crimsite'})
  event.remove({id: 'create:crushing/crimsite_recycling'})
  event.remove({id: 'create:crushing/veridium'})
  event.remove({id: 'create:crushing/veridium_recycling'})
  event.remove({id: 'create:crushing/asurine'})
  event.remove({id: 'create:crushing/asurine_recycling'})
  event.remove({id: 'create:smelting/iron_ingot_from_crushed'})
  event.remove({id: 'create:blasting/iron_ingot_from_crushed'})
  event.remove({id: 'create:splashing/crushed_raw_iron'})
  event.remove({id: 'create:smelting/copper_ingot_from_crushed'})
  event.remove({id: 'create:blasting/copper_ingot_from_crushed'})
  event.remove({id: 'create:splashing/crushed_raw_copper'})
  event.remove({id: 'create:smelting/gold_ingot_from_crushed'})
  event.remove({id: 'create:blasting/gold_ingot_from_crushed'})
  event.remove({id: 'create:splashing/crushed_raw_gold'})
  event.remove({id: 'create:smelting/zinc_ingot_from_crushed'})
  event.remove({id: 'create:blasting/zinc_ingot_from_crushed'})
  event.remove({id: 'create:splashing/crushed_raw_zinc'})

  //Apple Sauce
  event.custom({
      "type": "create:compacting",
      "ingredients": [
        {
          "tag": "farmopolis:apples"
        }
      ],
      "results": [
        {
          "amount": 125,
          "id": "create_chocolate:apple_sauce_fluid"
          }
      ]
  }).id('who_knows_cause_i_cant_be_bothered_to_look/apple_sauce')

  //Crushed to Essence
  resourceToDust("create:crushed_raw_iron", "mysticalagriculture:iron_essence", 2)
  resourceToDust("create:crushed_raw_copper", "mysticalagriculture:copper_essence", 2)
  resourceToDust("create:crushed_raw_gold", "mysticalagriculture:gold_essence", 2)
  resourceToDust("create:crushed_raw_zinc", "mysticalagriculture:zinc_essence", 2)
  resourceToDust("create:crushed_raw_aluminum", "mysticalagriculture:aluminum_essence", 2)
  resourceToDust("create:crushed_raw_lead", "mysticalagriculture:lead_essence", 2)
  resourceToDust("create:crushed_raw_silver", "mysticalagriculture:silver_essence", 2)
  resourceToDust("create:crushed_raw_osmium", "mysticalagriculture:osmium_essence", 2)
  resourceToDust("create:crushed_raw_uranium", "mysticalagriculture:uranium_essence", 2)
  resourceToDust("create:crushed_raw_tin", "mysticalagriculture:tin_essence", 2)
  resourceToDust("create:crushed_raw_platinum", "mysticalagriculture:platinum_essence", 2)
  resourceToDust("create:crushed_raw_nickel", "mysticalagriculture:nickel_essence", 2)

  //Resource to Dusts
  resourceToDust("minecraft:iron_ingot", "alltheores:iron_dust", 1)
  resourceToDust("minecraft:copper_ingot", "alltheores:copper_dust", 1)
  resourceToDust("minecraft:gold_ingot", "alltheores:gold_dust", 1)
  resourceToDust("minecraft:netherite_ingot", "alltheores:netherite_dust", 1)
  resourceToDust("alltheores:aluminum_ingot", "alltheores:aluminum_dust", 1)
  resourceToDust("alltheores:lead_ingot", "alltheores:lead_dust", 1)
  resourceToDust("alltheores:silver_ingot", "alltheores:silver_dust", 1)
  resourceToDust("alltheores:osmium_ingot", "alltheores:osmium_dust", 1)
  resourceToDust("alltheores:uranium_ingot", "alltheores:uranium_dust", 1)
  resourceToDust("alltheores:tin_ingot", "alltheores:tin_dust", 1)
  resourceToDust("alltheores:zinc_ingot", "alltheores:zinc_dust", 1)
  resourceToDust("alltheores:platinum_ingot", "alltheores:platinum_dust", 1)
  resourceToDust("alltheores:iridium_ingot", "alltheores:iridium_dust", 1)
  resourceToDust("alltheores:bronze_ingot", "alltheores:bronze_dust", 1)
  resourceToDust("alltheores:electrum_ingot", "alltheores:electrum_dust", 1)
  resourceToDust("alltheores:steel_ingot", "alltheores:steel_dust", 1)
  resourceToDust("alltheores:invar_ingot", "alltheores:invar_dust", 1)
  resourceToDust("alltheores:constantan_ingot", "alltheores:constantan_dust", 1)
  resourceToDust("minecraft:diamond", "alltheores:diamond_dust", 1)
  resourceToDust("alltheores:ruby", "alltheores:ruby_dust", 1)
  resourceToDust("alltheores:sapphire", "alltheores:sapphire_dust", 1)
  resourceToDust("alltheores:peridot", "alltheores:peridot_dust", 1)

  function resourceToDust(resource, dust, count) {
    event.custom({
    "type": "create:crushing",
    "ingredients": [
      {
        "item": resource
      }
    ],
    "processing_time": 100,
    "results": [
      {
        "count": count,
        "id": dust
      }
    ]
    })
  }

  //Event Custom
  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "fluid_stack",
        "amount": 1000,
        "fluid": "minecraft:milk"
      }
    ],
    "results": [
      {
        "id": "minecolonies:milky_bread"
      }
    ]
  }).id('farmopolis:milky_bread')

  event.custom({
    "type": "create:filling",
    "ingredients": [
      {
        "item": "minecraft:bread"
      },
      {
        "type": "fluid_stack",
        "amount": 1000,
        "fluid": "create:honey"
      }
    ],
    "results": [
      {
        "id": "minecolonies:sugary_bread"
      }
    ]
  }).id('farmopolis:sugary_bread')


})