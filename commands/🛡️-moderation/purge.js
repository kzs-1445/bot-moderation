module.exports = {
  name: "purge",
  description: "Purge messages",
  async execute(message, args) {
  const firstDigit = args[0][0]
          const lastDigits = parseInt(`${args[0][1]}${args[0][2]}`)
          if(args[0] <= 100) {
             message.channel.bulkDelete(args[0]).catch(() => {
                return message.channel.send(`An error occured, make sure the messages ur purging are under 14 days old, and I have perms to delete messages.`)
            })
          }else if(args[0] >= 101 && args[0] <= 999) {
              for(let i = 0; i < firstDigit; i++) {
  setTimeout(() => {
                  message.channel.bulkDelete(100).catch(() => {
                      return message.channel.send(`An error occured, make sure the messages ur purging are under 14 days old, and I have perms to delete messages.`)
                  })
  }, 1200)
              }
              message.channel.bulkDelete(lastDigits)
          } else if(args[0] === 1000) {
              for(let i = 0; i < 10; i++) {
  setTimeout(() => {
                  message.channel.bulkDelete(100).catch(() => {
                      return message.channel.send(`An error occured, make sure the messages ur purging are under 14 days old, and I have perms to delete messages.`)
                  })
  }, i * 1200)
              }
          }
         const msg = await message.channel.send(`Successfully deleted ${args[0]} messages!`)
              msg.delete({ timeout: 3000 })
       }
      }