ServerEvents.recipes(event => {

    //Remove Cloche Recipes
    event.remove({id: 'cloche:cloche'})

    //Cloche Recipes

    addMagicBeanRecipe('farmopolis:ur_ghast_essence', 'twilightforest:ur_ghast_trophy')
    addMagicBeanRecipe('farmopolis:naga_essence', 'twilightforest:naga_trophy')
    addMagicBeanRecipe('farmopolis:lich_essence', 'twilightforest:lich_trophy')
    addMagicBeanRecipe('farmopolis:minoshroom_essence', 'twilightforest:minoshroom_trophy')
    addMagicBeanRecipe('farmopolis:hydra_essence', 'twilightforest:hydra_trophy')
    addMagicBeanRecipe('farmopolis:knight_phantom_essence', 'twilightforest:knight_phantom_trophy')
    addMagicBeanRecipe('farmopolis:alpha_yeti_essence', 'twilightforest:alpha_yeti_trophy')
    addMagicBeanRecipe('farmopolis:quest_ram_essence', 'twilightforest:quest_ram_trophy')
    addMagicBeanRecipe('farmopolis:snow_queen_essence', 'twilightforest:snow_queen_trophy')

    //Magic Beans
    function addMagicBeanRecipe(output, catalyst) {
        event.custom({
            "type": "cloche:cloche",
            "catalyst": {
              "item": catalyst
            },
            "duration": 3000,
            "dimension": "twilightforest:twilight_forest",
            "results": [
              {
                "item": {
                  "count": 1,
                  "id": "twilightforest:huge_stalk"
                }
              },
              {
                "chance": 1,
                "item": {
                  "count": 1,
                  "id": output
                }
              }
            ],
            "seed": {
              "item": "twilightforest:magic_beans"
            },
            "soil": {
              "item": "twilightforest:uberous_soil"
            }
        }).id(`farmopolis:cloche/${output.split(":")[1]}`)  
    }
    
})