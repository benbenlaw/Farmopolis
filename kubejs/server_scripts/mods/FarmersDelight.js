ServerEvents.recipes(event => {

    //Remove Farmers Delight Recipes
    event.remove({id: 'farmersdelight:wheat_dough_from_eggs'})
    event.remove({id: 'farmersdelight:wheat_dough_from_water'})
    event.remove({id: 'farmersdelight:cake_from_milk_bottle'})
    event.remove({id: 'farmersdelight:cake_from_slices'})
    event.remove({id: 'farmersrespite:chilidog_alt'})

    //Pasta
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
            {
            "tag": "c:doughs"
            }
        ],
        "result": [
            {
            "item": {
                "count": 1,
                "id": "farmersdelight:raw_pasta"
            }
            }
        ],
        "tool": {
            "tag": "c:tools/knife"
        }
    }).id('farmersdelight:cutting/tag_dough')

    //Cooking Recipes
    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
            "item": "minecraft:milk_bucket"
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "count": 2,
            "id": "create_cheese:cheese_curds"
        }
    }).id('farmopolis:cheese_curds')

    event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
            "item": "minecraft:water_bucket"
            },
            {
            "item": "create:wheat_flour"
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "count": 1,
            "id": "create:dough"
        }
    }).id('farmopolis:dough')

        event.custom({
        "type": "farmersdelight:cooking",
        "experience": 1.0,
        "ingredients": [
            {
            "item": "minecraft:water_bucket"
            }
        ],
        "recipe_book_tab": "drinks",
        "result": {
            "count": 4,
            "id": "alltheores:salt"
        }
    }).id('farmopolis:dough')
})