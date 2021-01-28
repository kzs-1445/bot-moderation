const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "firstmessage",
    description: "Shows the first ever message sent to the channel",
    run: async (bot, msg, args) => {
            if (
                msg.channel.type === 'text' &&
                !msg.channel.permissionsFor(bot.user).has('READ_MESSAGE_HISTORY')
            ) {
                return msg.reply(
                    `Sorry, I don't have permission to read ${msg.channel}...`
                )
            }
            const messages = await msg.channel.messages.fetch({ after: 1, limit: 1 })
            const message = messages.first()
            const embed = new MessageEmbed()
                .setThumbnail(
                    message.author.displayAvatarURL({ format: 'png', dynamic: true })
                )
                .setTitle(`First Message`)
                .setURL(message.url)
                .setThumbnail(message.author.displayAvatarURL({ format: 'png', dynamic: true }))
                .setDescription(`**Message:** ${message.content}`)
                .addField('CreatedBy', `**${message.author}**`, true)
                .addField(`MessageID`, `${message.id}`, true)
                .addField('CreatedAt', (message.createdAt), true)
                .setFooter(`Requested by: ${message.member.displayName}`,message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
            return msg.channel.send(embed)
        }
    }