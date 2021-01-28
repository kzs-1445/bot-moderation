const { MessageEmbed } = require("discord.js");
const {cross, tick, red, green, information}= require("../../config.json");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports = {
    category: "edit-text",
    name : 'translate',
    description: "Translate words/sentences to your choice of language.",
    cooldown: 5000,
    usage: "translate <language> <text>",
    example: "translate <german> <hallo>",
    aliases:[],
    args: false,
    memberPermission: [],
    botPermission: [],

  run: async (bot, message, args) => {
    const translateLangTO = args[0];
    const content = args.slice(1).join(" ");
    const result = await translate(content, { to: translateLangTO });
  
      message.channel.send(result.text)
  .catch(err => {
      message.channel.send(`An error has occured:\`${err.message}\``)
 
  })


  },
};