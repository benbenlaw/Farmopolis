//Seasons Tags

ServerEvents.tags('item', (event) => {

    event.get("sereneseasons:autumn_crops").add(['chococraft:gysahl_green_seeds'])
    event.get("sereneseasons:year_round_crops").add(['#mysticalagriculture:seeds'])
})

ServerEvents.tags('block', (event) => {

    event.get("sereneseasons:autumn_crops").add(['chococraft:gysahl_green'])
    event.get("sereneseasons:year_round_crops").add(['#mysticalagriculture:crops'])



})