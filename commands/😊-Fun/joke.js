const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "joke",
  aliases: [],
  category: "Fun",
  description: "Return A Random Joke!",
  usage: "Joke",
  run: async (client, message, args) => {
    
    const Data = await Random.GetJoke({ Color: Color });
    return message.channel.send(Data);
  }
};