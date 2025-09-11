//Official Server Events

const serverName = "Farmopolis"
const enableServerEvents = false //Set to false before updating
const bannedItemRemoved = true //Set to true if you want to remove banned items
const tickCheckForBannedItems = 100 //In ticks 100 = 5 seconds

//When adding to blocks tag add to item as well if applicable
const itemsToBan = [
  //"smartcrafting:portable_smart_crafting_table",
  //"minecraft:diamond_block"
]
const blocksToBan = [
  //"minecraft:diamond_block",
  //"#minecraft:dirt"
]

//Add items in here to ban them from the server
ServerEvents.tags("item", event => {
  event.get("bbl:banned_on_servers").add(itemsToBan)
})

//Add blocks in here to ban them from the server
ServerEvents.tags("block", event => {
  event.get("bbl:banned_on_servers").add(blocksToBan)
})

//Welcome Message
PlayerEvents.loggedIn(event => {
  if (!enableServerEvents) return;
  event.player.sendSystemMessage("Welcome to the " + serverName + " Official Server!, Enjoy your stay and follow the rules!")
  event.server.runCommandSilent(`ftbranks add ${event.player.username} member`)
  event.server.runCommandSilent(`ftbranks add @a member`)
})

//Server Commands /ticket and /bugs take to official BBL Discord and respective channels 
ServerEvents.commandRegistry(event => {
  const { commands: Commands } = event;
  if (!enableServerEvents) return;
  event.register(
    Commands.literal('ticket')
      .executes(ctx => {
        const server = ctx.source.server

        server.runCommandSilent(`tellraw @a [{"text":"Have a Server Issue: "},{"text":"[Click Here]","clickEvent":{"action":"open_url","value":"https://discord.com/channels/716249661798612992/1384215051900027010/"},"hoverEvent":{"action":"show_text","value":"Create a Ticket Here!"}}]`)

        return 1;
      })
  );

  event.register(
    Commands.literal('bugs')
      .executes(ctx => {
        const player = ctx.source.player;
        const server = ctx.source.server

        server.runCommandSilent(`tellraw @a [{"text":"Have a Modpack Issue: "},{"text":"[Click Here]","clickEvent":{"action":"open_url","value":"https://discord.com/channels/716249661798612992/1253315160773496894/"},"hoverEvent":{"action":"show_text","value":"Create a Thread Here!"}}]`)

        return 1;
      })
  );
});



//Remove Banned Items from player inventories every x seconds if enabled
PlayerEvents.tick(event => {
  if (!enableServerEvents) return;

  if (event.server.getTickCount() % tickCheckForBannedItems != 0) return;

  const bannedItems = event.player.inventory.items.filter(item => item.hasTag("bbl:banned_on_servers"));
  if (bannedItems.length > 0) {
    bannedItems.forEach(item => {
      if (bannedItemRemoved) {
        event.player.sendSystemMessage(`A banned item has been removed from your inventory: ${item.id}`);
        item.shrink(64);
      }
    })
  }
})

//Removes Most supported recipe types from producing the banned items, modpack recipes
//though kubejs will still be able to produce them
ServerEvents.recipes(event => {
  if (!enableServerEvents) return;
  event.remove({ output: '#bbl:banned_on_servers'})
});

//Block placing event to stop banned blocks being placed
BlockEvents.placed(event => {
  if (!enableServerEvents) return;
  if (event.block.hasTag("bbl:banned_on_servers")) {
    event.player.sendSystemMessage(`This block: ${event.block.id} is banned on this server!`);
    event.cancel();
  } 
})

// Right Click Event to stop banned items being used
ItemEvents.rightClicked(event => {
  if (!enableServerEvents) return;
  if (event.item.hasTag("bbl:banned_on_servers")) {
    event.player.sendSystemMessage(`This item: ${event.item.id} is banned on this server!`);
    if (bannedItemRemoved) {
      event.player.sendSystemMessage(`The banned item has been removed from your inventory: ${event.item.id}`);
      event.item.shrink(64);
    }
    event.cancel();
  }
})

