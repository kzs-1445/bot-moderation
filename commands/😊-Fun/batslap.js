module.exports = {
  name: "batslap",
  description: "slap someone in your guild",
run: async (bot, message, args) => {
  const Discord = require("discord.js");
  const canvacord = require("canvacord");

  let user1 = message.author;
  let user2 = message.mentions.users.first();
  let user1Avatar = user1.displayAvatarURL({ dynamic: false, format: "png" });
  let user2Avatar = user2.displayAvatarURL({ dynamic: false, format: "png" });
  let image = await canvacord.Canvas.slap(user1Avatar, user2Avatar);
  let attachment = new Discord.MessageAttachment(image, "slap.png");
  return message.channel.send(attachment);
},
}