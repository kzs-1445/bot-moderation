const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "advice",
  aliases: [],
  category: "Fun",
  description: "Return A Random Advice!",
  usage: "Advice",
  run: async (client, message, args) => {
    
    const Data = await Random.GetAdvice({ Color: Color });
    return message.channel.send(Data);
  }
};