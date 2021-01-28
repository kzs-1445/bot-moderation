const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "baka",
  aliases: [],
  category: "Image",
  description: "Return A Random Baka!",
  usage: "Baka",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "baka", Color: Color });
    
    return message.channel.send(Data);
  }
};