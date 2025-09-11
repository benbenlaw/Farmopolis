//Set Game Rules 
ServerEvents.loaded(event => {
    
    if (event.server.persistentData.gameRules) return
    event.server.gameRules.set("allowBanditRaids", false)
    event.server.gameRules.set("doInsomnia", false)

    event.server.persistentData.gameRules = true
})

