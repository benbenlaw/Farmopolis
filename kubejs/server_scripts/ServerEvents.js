//No Loot from bats unless killed by player

EntityEvents.death(event => {
  const entityType = event.entity.type;
  if (entityType === "minecraft:bat" || entityType === "mobstein:bat") {
    if (!event.source.player) {
      event.cancel();
    }
  }
});

ServerEvents.recipes(event => {
  const month = new Date().getMonth() + 1
  const isHalloween = month === 10
  const isChristmas = month === 12

  if (!isHalloween) {
    event.remove({ mod: 'trickortreat' })
    event.remove({ mod: 'hauntedharvest' })
  }

  if (!isChristmas) {
    event.remove({ mod: 'merrymaking' })
    event.remove({ mod: 'farmers_delight_christmas_editio' })
  }
})