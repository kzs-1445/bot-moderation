const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "lmgtfy",
  aliases: ["google"],
  category: "Fun",
  description: "Let Me Google It For You!",
  usage: "Lmgtfy <Query>",
  run: async (client, message, args) => {
    
    const Query = args.join(" ");
    if (!Query) return message.channel.send("Please Give Your Query!");

    const Data = await Random.Lmgtfy({ Search: Msg, Color: Color });

    return message.channel.send(Data);
  }
};