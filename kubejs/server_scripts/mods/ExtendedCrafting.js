ServerEvents.recipes(event => {

    //Remove
    event.remove({id:'extendedcrafting:black_iron_ingot'})

    //Shapeless
    event.shapeless('extendedcrafting:luminessence', [
        'farmopolis:baker_bucks', 'farmopolis:cheese_bucks', 
        'farmopolis:brewing_bucks', 'farmopolis:nether_bucks', 
        'farmopolis:twilight_bucks', 'minecraft:glowstone_dust', 
        'minecraft:redstone'])
    .id('extendedcrafting:luminessence')

    //Custom 
    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
            {
            "item": "minecraft:apple"
            },
            {
            "item": "minecraft:golden_apple"
            },
            {
            "item": "minecraft:enchanted_golden_apple"
            },
            {
            "item": "colors:black_apple"
            },
            {
            "item": "colors:blue_apple"
            },
            {
            "item": "colors:brown_apple"
            },
            {
            "item": "colors:cyan_apple"
            },
            {
            "item": "colors:gray_apple"
            },
            {
            "item": "colors:green_apple"
            },
            {
            "item": "drinkbeer:beer_mug_apple_lambic"
            },
            {
            "item": "create_chocolate:vegan_chocolated_apple"
            },
            {
            "item": "create:honeyed_apple"
            },
            {
            "item": "create_winery:apple_juice"
            },
            {
            "item": "create_winery:apple_must"
            },
            {
            "item": "create_chocolate:royal_chocolated_apple"
            },
            {
            "item": "create_chocolate:caramelized_apple"
            },
            {
            "item": "create_chocolate:white_chocolated_apple"
            },
            {
            "item": "create_chocolate:dark_chocolated_apple"
            },
            {
            "item": "mysticalagradditions:inferium_apple"
            },
            {
            "item": "colors:yellow_apple"
            },
            {
            "item": "mysticalagradditions:prudentium_apple"
            },
            {
            "item": "mysticalagradditions:tertium_apple"
            },
            {
            "item": "mysticalagradditions:imperium_apple"
            },
            {
            "item": "mysticalagradditions:supremium_apple"
            },
            {
            "item": "mysticalagradditions:insanium_apple"
            },
            {
            "item": "colors:white_apple"
            },
            {
            "item": "colors:lime_apple"
            },
            {
            "item": "colors:light_gray_apple"
            },
            {
            "item": "colors:light_blue_apple"
            },
            {
            "item": "colors:orange_apple"
            },
            {
            "item": "colors:pink_apple"
            },
            {
            "item": "colors:purple_apple"
            },
            {
            "item": "colors:red_apple"
            },
            {
            "item": "colors:magenta_apple"
            },
            {
            "item": "create_chocolate:chocolated_apple"
            },
            {
            "item": "farmersdelight:apple_cider"
            }
        ],
        "result": {
            "id": "farmopolis:ultimate_apple"
        }
    }).id('farmopolis:ultimate_apple')

    event.custom({
        "type": "extendedcrafting:shaped_table",
        "pattern": [
            "     AAAA",
            "    ABCDA",
            "   AEFDCA",
            "  AGGHFBA",
            " AIGHGEA ",
            "ABFHGGA  ",
            "ACDFIA   ",
            "ADCBA    ",
            "AAAA     "
        ],
        "key": {
            "A": {
            "item": "minecraft:bread"
            },
            "B": {
            "item": "the_bumblezone:bee_bread"
            },
            "C": {
            "item": "mynethersdelight:slices_of_bread"
            },
            "D": {
            "item": "minecolonies:golden_bread"
            },
            "E": {
            "item": "mynethersdelight:bread_loaf"
            },
            "F": {
            "item": "minecolonies:sugary_bread"
            },
            "G": {
            "item": "minecolonies:milky_bread"
            },
            "H": {
            "item": "mynethersdelight:toasts"
            },
            "I": {
            "item": "create_chocolate:ginger_bread"
            }
        },
        "result": {
            "id": "farmopolis:ultimate_bread"
        }
    }).id('farmopolis:ultimate_bread')

    event.custom({
        "type": "extendedcrafting:shapeless_table",
        "ingredients": [
            {
            "item": "create_chocolate:caramel_egg"
            },
            {
            "item": "create_chocolate:royal_chocolate_egg"
            },
            {
            "item": "create_chocolate:full_royal_chocolate_bar"
            },
            {
            "item": "create_chocolate:full_caramel_bar"
            },
            {
            "item": "create_chocolate:full_white_chocolate_bar"
            },
            {
            "item": "create_chocolate:full_dark_chocolate_bar"
            },
            {
            "item": "create_chocolate:full_vegan_chocolate_bar"
            },
            {
            "item": "create_chocolate:full_chocolate_bar"
            },
            {
            "item": "create_chocolate:vegan_chocolate_praline"
            },
            {
            "item": "create_chocolate:caramel_glazed_berries"
            },
            {
            "item": "create_chocolate:white_chocolate_glazed_berries"
            },
            {
            "item": "create_chocolate:dark_chocolate_glazed_berries"
            },
            {
            "item": "create_chocolate:vegan_chocolate_glazed_berries"
            },
            {
            "item": "create_chocolate:royal_chocolate_praline"
            },
            {
            "item": "create_chocolate:caramel_praline"
            },
            {
            "item": "create_chocolate:white_chocolate_praline"
            },
            {
            "item": "create_chocolate:dark_chocolate_praline"
            },
            {
            "item": "create_chocolate:chocolate_praline"
            },
            {
            "item": "create_chocolate:royal_chocolate_glazed_berries"
            },
            {
            "item": "create_chocolate:vegan_chocolate_cake"
            },
            {
            "item": "create_chocolate:chocolate_cake"
            },
            {
            "item": "create_chocolate:dark_chocolate_cake"
            },
            {
            "item": "create_chocolate:white_chocolate_cake"
            },
            {
            "item": "create_chocolate:caramel_cake"
            },
            {
            "item": "create_chocolate:royal_chocolate_cake"
            },
            {
            "item": "create_chocolate:chocolate_bunny"
            },
            {
            "item": "create_chocolate:vegan_chocolate_truffle"
            },
            {
            "item": "create_chocolate:dark_chocolate_bunny"
            },
            {
            "item": "create_chocolate:white_chocolate_bunny"
            },
            {
            "item": "create_chocolate:caramel_bunny"
            },
            {
            "item": "create_chocolate:royal_chocolate_bunny"
            },
            {
            "item": "create_chocolate:chocolate_egg"
            },
            {
            "item": "create_chocolate:dark_chocolate_egg"
            },
            {
            "item": "create_chocolate:white_chocolate_egg"
            },
            {
            "item": "create_chocolate:chocolate_truffle"
            },
            {
            "item": "create_chocolate:dark_chocolate_truffle"
            },
            {
            "item": "create_chocolate:white_chocolate_truffle"
            },
            {
            "item": "create_chocolate:caramel_truffle"
            },
            {
            "item": "create_chocolate:royal_chocolate_truffle"
            },
            {
            "item": "farmersdelight:chocolate_pie"
            },
            {
            "item": "twilightdelight:chocolate_wafer"
            },
            {
            "item": "twilightdelight:chocolate_113"
            },
            {
            "item": "create:chocolate_glazed_berries"
            },
            {
            "item": "createaddition:chocolate_cake"
            }
        ],
        "result": {
            "id": "farmopolis:ultimate_chocolate"
        }
    }).id('farmopolis:ultimate_chocolate')
})