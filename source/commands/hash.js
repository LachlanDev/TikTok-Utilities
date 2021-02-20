const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');
const number = require('easy-number-formatter')

exports.run = (client, message, args) =>{
    (async () => {
        try 
        {
            const hash = await TikTokScraper.getHashtagInfo(args[0]);
            const hashtag = new discord.MessageEmbed()
            .setColor('#b434eb')
            .setTitle(`Hashtag Info - #${hash.challenge.title}`)
            .addField("Name", `#${hash.challenge.title}`, false)
            .addField("Video Count:", number.formatNumber(`${hash.stats.videoCount}`),true)
            .addField("View Count:", number.formatNumber(`${hash.stats.viewCount}`),true)
            .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: hashtag })
        } 
        catch (error) 
        {
            const embederr = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`Error`)
            .addField("An error has occured", error)
            .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: embederr })
        }
    })();
}