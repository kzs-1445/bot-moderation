module.exports = {
  name: 'setavatar',
  description: 'Set bot avatar',
  run: async (client, message, args) => {
    const redMessage = (message, title, description = null) => {
      message.channel.send({
        embed: {
          color: 15158332,
          title: title,
          description: description,
          author: {
            name: message.client.user.username,
            icon_url: message.client.user.avatarURL({
              format: 'png',
              dynamic: true,
              size: 1024
            })
          }
        }
      })
    }
      if (message.author.id !== "313422493694033925") {
          return message.channel.send(`Seul KzS#5430 peut utilisé cette commande. `);
        }
      if (message.deletable) {
        message.delete()
      }
      if (!args || args.length < 1) {
        return redMessage(
          message,
          'Merci dinserer un lien valide.'
        )
      }
      client.user.setAvatar(args.join(' '))
  
      message.channel
        .send('**Ma photo de profil à changé,merci.**')
        .then((m) => m.delete({ timeout: 10000 }))
    }
  }