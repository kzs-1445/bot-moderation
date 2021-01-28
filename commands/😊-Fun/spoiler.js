const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "spoiler",
  aliases: ["spoilermessage", "slr"],
  category: "Fun",
  description: "Return A Spoiler!",
  usage: "Spoiler <Message>",
  run: async (client, message, args) => {
    
    const Msg = args.join(" ");
    if (!Msg) return message.channel.send("Please Give Your Message!");

    const Data = await Random.DiscordSpoiler({ Message: Msg, Color: Color });

    return message.channel.send(Data);
  }
};