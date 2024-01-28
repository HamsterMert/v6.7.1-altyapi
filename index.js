const { AoiClient } = require("aoi.js");

const client = new AoiClient({
  token: "token",
  prefix: "!",
  intents: ["MessageContent", "Guilds", "GuildMessages"],
  events: ["onMessage", "onInteractionCreate"],
  database: {
    type: "aoi.db",
    db: require("@akarui/aoi.db"),
    dbType: "KeyValue",
    tables: ["main"],
    securityKey: "a-32-characters-long-string-here",
  }
});

client.loadCommands("./commands/", true); //komutları yükledik


client.variables ({ //değişkenler
    ornek1: "ornek1",
    ornek2: false,
    ornek3: 0
})