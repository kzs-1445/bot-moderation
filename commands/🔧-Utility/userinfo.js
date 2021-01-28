const { MessageEmbed } = require('discord.js')
const moment = require('moment')

module.exports = {
  name: 'userinfo',
  aliases: ['whois', 'profile'],
  description: 'Shows info about a user',
  run: async (client, message, args) => {

    const user = client.users.cache.find(user => {
      return user.id === args[0]
    }) || message.mentions.members.first() ? message.mentions.members.first().user : '' || message.member.user 

    const embed = new MessageEmbed()
    .setColor(message.member.displayHexColor || 'RANDOM')
    .setAuthor(`${user.tag}'s Info`, user.displayAvatarURL({
      dynamic: true,
    }))
    .addFields({
      name: 'ID',
      value: user.id
    }, {
      name: 'Bot?',
      value: user.bot
    }, {
      name: 'Status',
      value: user.presence.status
    }, {
      name: 'Created At',
      value: `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`
    }, )
    .setTimestamp()

    
    const member = message.guild.members.cache.get(user.id)

    if (member) {
      embed.addField('Joined At', `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`)
      embed.addField('Roles:', member.roles.cache.map(r => `<@&${r.id}>`).join(' | '))
    }

    message.channel.send(embed)
  }
}