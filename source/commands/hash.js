const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');

const numformat = n => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
    if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
    if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };

exports.run = (client, message, args) =>{
    (async () => {
        try 
        {
            const hash = await TikTokScraper.getHashtagInfo(args[0]);
            const hashtag = new discord.MessageEmbed()
            .setColor('#b434eb')
            .setTitle(`Hashtag Info - #${hash.challenge.title}`)
            .addField("Name", `#${hash.challenge.title}`, false)
            .addField("Video Count:", numformat(`${hash.stats.videoCount}`),true)
            .addField("View Count:", numformat(`${hash.stats.viewCount}`),true)
            .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: hashtag })
        } 
        catch (error) 
        {
            const embederr = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`Error`)
            .addField("An error has occured", error)
            .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: embederr })
        }
    })();
}