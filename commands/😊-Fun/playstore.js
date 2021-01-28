const Discord = require("discord.js"), PlayStore = require("google-play-scraper"); //npm i google-play-scraper
const Color = "RANDOM";

module.exports = {
  name: "playstore",
  aliases: ["pstore", "googleplaystore", "ps"],
  category: "Members",
  description: "Show Playstore Application Information Of Your Given Name!",
  usage: "Playstore <Application Name>",
  run: async (client, message, args) => {
    if (!args[0])
      return message.channel.send(
        "Please Give Application Name!"
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          "No Application Found!"
        );
      };

      let Embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(App.title)
        .setDescription(App.summary)
        .addField("Price", App.priceText, true)
        .addField("Developer", App.developer, true)
        .addField("Score", App.scoreText, true)
        .setFooter(`Requested By ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
};