const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "choose",
  aliases: ["chooseforme"],
  category: "Fun",
  description: "Return A Choice!",
  usage: "Choose <Choice> Or <Choice> Or <Choice> (You Can Add Unlimited)",
  run: async (client, message, args) => {
    
    let Choices = args.join(" ");

    if (!Choices || !Choices.toLowerCase().includes(" or ") || Choices.toLowerCase().endsWith(" or")) return message.channel.send("Wrong Usage!\n\n- No Choice\n- No Or\n- No Other Choice");

    Choices = await Choices.toLowerCase().split(" or ");
    Choices = Choices[Math.floor(Math.random() * Choices.length)];

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setDescription(Choices.charAt(0).toUpperCase() +  Choices.slice(1))
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp();

    return message.channel.send(Embed);
  }
};