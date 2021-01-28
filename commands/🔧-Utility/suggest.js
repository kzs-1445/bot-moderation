const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "moderation",
  run: (client, message, args) => {
    if (!args.length) {
      return message.channel.send("Merci d'indiqué une suggestion.");
    }

    let channel = message.guild.channels.cache.find(x => x.name === "suggestion" || x.name === "suggestions");

    if (!channel) {
      return message.channel.send("Ce channel n'est pas nommé [suggestions]");
    }

    let embed = new MessageEmbed()
      .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setThumbnail(message.author.avatarURL({ dynamic: true, size: 2048 }))
      .setColor("RANDOM")
      .setDescription(args.join(" "))
      .setTimestamp();

    channel.send(embed).then(m => {
      m.react("✅");
      m.react("❌");
    });

    message.channel.send("Votre suggestion a été envoyé dans " + `${channel}`);
    
    message.delete()
    
  }
};