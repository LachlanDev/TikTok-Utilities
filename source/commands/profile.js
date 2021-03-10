const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');
const number = require('easy-number-formatter')

exports.run = (client, message, args) =>{
    (async () => {
        try 
        {
            const user = await TikTokScraper.getUserProfileInfo(args[0]);
            const userbe = new discord.MessageEmbed()
            .setColor('#b434eb')
            if(user.user.verified == true){
                userbe.setTitle(`User Info - @${user.user.uniqueId} <:Ver:750173291075076197>`)
            }
            else{
                userbe.setTitle(`User Info - @${user.user.uniqueId}`)
            }
            userbe.setURL(`https://www.tiktok.com/@${user.user.uniqueId}`)
            .setThumbnail(user.user.avatarThumb)
            .addField("Username", `${user.user.uniqueId}`, true)
            .addField("Nickname", `${user.user.nickname}`, true)
            if(user.user.signature == ''){
                userbe.addField("Bio", `No bio yet.`)
            }
            else{
                userbe.addField("Bio", `${user.user.signature}`)
            }
            userbe.addField("Followers", number.formatNumber(`${user.stats.followerCount}`),true)
            .addField("Following", number.formatNumber(`${user.stats.followingCount}`),true)
            .addField("Hearts", number.formatNumber(`${user.stats.heartCount}`),true)
            .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: userbe })
        } 
        catch (error) 
        {
            const embederr = new discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle(`Error`)
            .addField("An error has occured", "TikTok Utilities is currently encountering issues, please wait for them to be fixed or contact PapaSnags!")
            .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
            message.channel.send({embed: embederr })
        }
    })();
}