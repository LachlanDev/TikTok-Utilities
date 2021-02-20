const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');
const number = require('easy-number-formatter')

exports.run = (client, message, args) =>{
    (async () => {
        try 
        {
            const user = await TikTokScraper.getUserProfileInfo(args[0]);
            if(user.user.signature == ''){
                const userbe = new discord.MessageEmbed()
                .setColor('#b434eb')
                .setTitle(`User Info - @${user.user.uniqueId}`)
                .setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
                .setThumbnail(user.user.avatarThumb)
                .addField("Username", `${user.user.uniqueId}`, true)
                .addField("Nickname", `${user.user.nickname}`, true)
                .addField("Bio", `No bio yet.`)
                .addField("Followers", number.formatNumber(`${user.stats.followerCount}`),true)
                .addField("Following", number.formatNumber(`${user.stats.followingCount}`),true)
                .addField("Hearts", number.formatNumber(`${user.stats.heartCount}`),true)
                .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
                message.channel.send({embed: userbe })
            }
            else
            {
                const userbd = new discord.MessageEmbed()
                .setColor('#b434eb')
                .setTitle(`User Info - @${user.user.uniqueId}`)
                .setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
                .setThumbnail(user.user.avatarThumb)
                .addField("Username", `${user.user.uniqueId}`, true)
                .addField("Nickname", `${user.user.nickname}`, true)
                .addField("Bio", `${user.user.signature}`)
                .addField("Followers", number.formatNumber(`${user.stats.followerCount}`),true)
                .addField("Following", number.formatNumber(`${user.stats.followingCount}`),true)
                .addField("Hearts", number.formatNumber(`${user.stats.heartCount}`),true)
                .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
                message.channel.send({embed: userbd })            
            }
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