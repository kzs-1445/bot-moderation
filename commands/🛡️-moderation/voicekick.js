module.exports = {
  name: "voicekick",
  category: "moderation",
  run: async (client, message, args) => {
    if (!message.guild.me.hasPermission(["ADMINISTRATOR"]))
      return message.channel.send(
        "Tu n'as pas les permissions d'utilisé cette commande."
      );

    if (!message.mentions.members.first())
      return message.channel.send(
        `Merci de mentionné l'utilisateur que vous voulez exclure du channel voca.`
      );

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send(`L'utilisateur n'est pas dans un channel vocal.`);

    message.mentions.members.first().voice.kick();
    
    message.channel.send(`L'utilisateur a bien été exclu du channel vocal.`)
  }
};