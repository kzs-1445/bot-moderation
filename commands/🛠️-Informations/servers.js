const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "servers",
  aliases: ["srvs"],
  category: "Information",
  description: "Show Bot All Discord Servers!",
  usage: "Servers",
  run: async (client, message, args) => {
        
    const Servers = await client.guilds.cache.array().map((G, Position) => `${Position + 1}. **${G.name}** - **${G.id}**`).join("\n");

    return message.channel.send("```" + Servers + "```", { split: { char: "\n" }});
  }
};