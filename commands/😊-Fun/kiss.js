const discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "kiss",
    category: "action",
    description: "Kiss a user!",
    usage: "kiss user>",
    run: async (client, message, args) => {
    const user = message.mentions.users.first() || message.author;
    const slapped = message.author.id === user.id ? "themselfs" : user.username;

    const data = await fetch("https://nekos.life/api/v2/img/kiss").then((res) =>
    res.json()
    );
    const embed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${message.author.username} kissed ${slapped}`)
        .setImage(`${data.url}`)
        .setFooter("Powered by KzS")
    message.channel.send(embed);
}
}