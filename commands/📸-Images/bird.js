const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "bird",
  aliases: [],
  category: "Image",
  description: "Return A Random Bird!",
  usage: "Bird",
  run: async (client, message, args) => {
    
    const Data = await Random.GetAnimalImage({ Animal: "bird", Color: Color });
    return message.channel.send(Data);
  }
};