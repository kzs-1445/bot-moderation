const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'igbot',
    description: "Gives the Invite Link for this Bot to add it to your server!",
    usage: "?igbot",
    aliases: ['ig'],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
        .setDescription('Tu peux m\'inviter en cliquant sur (https://discord.com/api/oauth2/authorize?client_id=779629014842081290&permissions=8&scope=bot)')
        .setColor("BLUE")
        
        
        message.channel.send(embed)
    }
}