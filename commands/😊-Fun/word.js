const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "word",
  aliases: [],
  category: "Fun",
  description: "Return A Word!",
  usage: "Word",
  run: async (client, message, args) => {
    
    const Data = await Random.GetWord({ Color: Color });
    return message.channel.send(Data);
  }
};