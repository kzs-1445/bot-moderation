const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready',() => {
    console.log('Le bot est prêt.');
    client.user.setActivity("Мастер КзС", {
      type: "STREAMING",
      url: "https://www.twitch.tv/K3cde"
    })
});
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})    
client.on(`message`, async message => {
    const bannedWords = [`discord.gg`, `.gg/`, `.gg /`, `. gg /`, `. gg/`, `discord .gg /`, `discord.gg /`, `discord .gg/`, `discord .gg`, `discord . gg`, `discord. gg`, `discord gg`, `discordgg`, `discord gg /`]
    try {
        if (bannedWords.some(word => message.content.toLowerCase().includes(word))) {
            if (message.author.id === message.guild.ownerID) return;
            await message.delete();
            await message.channel.send(`**Les liens sont interdits sur le serveur !**`);
        }
    } catch (e) {
        console.log(e);
    }
});
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
    warnThreshold: 2, // Amount of messages sent in a row that will cause a warning.
    kickThreshold: 4, // Amount of messages sent in a row that will cause a ban.
    banThreshold: 5, // Amount of messages sent in a row that will cause a ban.
    maxInterval: 500, // Amount of time (in milliseconds) in which messages are considered spam.
    warnMessage: '{@user},Vous envoyez des messages trop rapidement.', // Message that will be sent in chat upon warning a user.
    kickMessage: '**{user_tag}** a été kick pour avoir envoyé des messages trop rapidement.', // Message that will be sent in chat upon kicking a user.
    banMessage: '**{user_tag}** a été banni pour avoir envoyé des messages trop rapidement.', // Message that will be sent in chat upon banning a user.
    maxDuplicatesWarning: 4, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesKick: 5, // Amount of duplicate messages that trigger a warning.
    maxDuplicatesBan: 6, // Amount of duplicate messages that trigger a warning.
    exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
    ignoreBots: true, // Ignore bot messages.
    verbose: true, // Extended Logs from module.
    ignoredUsers: [], // Array of User IDs that get ignored.
    // And many more options... See the documentation.
});
 
client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));
 
client.on('message', (message) => antiSpam.message(message)); 
const moment = require ('moment')
const moment2 = require("moment-duration-format")
 
client.on("guildMemberAdd", async member=> {
 let date = moment.duration(new Date() - member.user.createdAt).format("d");
 
    if(date < 20) {

 
member.ban("fake account")
        }})
        client.on("message", message => {
            if (message.content === `<@!${client.user.id}>`) 
             return message.reply(`**Mon prefix est** ${prefix}` + `\n **Pour avoir accès à toute les commandes,merci d'indiquer** : ${prefix}help` );
            });

            const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;
        client.login(process.env.TOKEN);