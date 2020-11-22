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
                .addField("Followers", numformat(`${user.stats.followerCount}`),true)
                .addField("Following", numformat(`${user.stats.followingCount}`),true)
                .addField("Hearts", numformat(`${user.stats.heartCount}`),true)
                .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
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
                .addField("Followers", numformat(`${user.stats.followerCount}`),true)
                .addField("Following", numformat(`${user.stats.followingCount}`),true)
                .addField("Hearts", numformat(`${user.stats.heartCount}`),true)
                .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
                message.channel.send({embed: userbd })            
            }
        } 
        catch (error) 
        {
            console.log(error);
            message.channel.send(error)
        }
    })();
}