//No Loot from bats unless killed by player

EntityEvents.death(event => {
  const entityType = event.entity.type;
  if (entityType === "minecraft:bat" || entityType === "mobstein:bat") {
    if (!event.source.player) {
      event.cancel();
    }
  }
});