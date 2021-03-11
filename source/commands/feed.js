const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');
var dateFormat = require("dateformat");
const number = require('easy-number-formatter')

exports.run = (client, message, args) =>{
(async () => {
    try {
        const posts = await TikTokScraper.user(args[0], { 
            number: 100, 
            sessionList: ['sid_tt=58ba9e34431774703d3c34e60d584475;'] 
        });
        const feed = new discord.MessageEmbed()
        .setColor('#b434eb')
        if(posts.collector[0].authorMeta.verified == true){
            feed.setTitle(`User Info - @${posts.collector[0].authorMeta.name} <:Ver:750173291075076197>`)
        }
        else{
            feed.setTitle(`User Info - @${posts.collector[0].authorMeta.name}`)
        }
        feed.setURL(posts.collector[0].webVideoUrl)
        .setThumbnail(posts.collector[0].authorMeta.avatar)
        .setImage(posts.collector[0].covers.origin)
        .setDescription(`Latest post from ${args[0]}`)
        if(posts.collector[0].text){
            feed.addField('Post Description',`${posts.collector[0].text}`)
        }
        else{
            feed.addField('Post Description',`Null`)
        }
        var date = new Date(posts.collector[0].createTime*1000)
        feed.addField('Post Date', dateFormat(date, 'dddd, mmmm dS, yyyy'))
        .addField("Views", number.formatNumber(`${posts.collector[0].playCount}`),true)
        .addField("Comments", number.formatNumber(`${posts.collector[0].commentCount}`),true)
        .addField("Hearts", number.formatNumber(`${posts.collector[0].diggCount}`),true)
        .addField("Shares", number.formatNumber(`${posts.collector[0].shareCount}`))
        .addField('Song Info', `${posts.collector[0].musicMeta.musicName} - ${posts.collector[0].musicMeta.musicAuthor}`)
        .addField("Video Link", `[Click here](${posts.collector[0].webVideoUrl})`)

        .setFooter("TikTok Utilities by LachlanDev#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
        message.channel.send({embed: feed})        
    } catch (error) {
        const embederr = new discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Error`)
        .addField("An error has occured", "TikTok Utilities is currently encountering issues, please wait for them to be fixed or contact LachlanDev#8014")
        .setFooter("TikTok Utilities by LachlanDev#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
        message.channel.send({embed: embederr })    }
})();
}