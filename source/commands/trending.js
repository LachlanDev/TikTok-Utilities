const discord = require ("discord.js");
const TikTokScraper = require('tiktok-scraper');
var dateFormat = require("dateformat");
const number = require('easy-number-formatter')
var rn = require('random-number');

exports.run = (client, message, args) =>{
// Trending feed
(async () => {
    try {
        const posts = await TikTokScraper.trend('', { 
            number: 100,
            sessionList: ['sid_tt=58ba9e34431774703d3c34e60d584475;'] 
        });
        var options = {
            min:  1
          , max:  100
          , integer: true
          }
        var random_Number = rn(options)
        const trending = new discord.MessageEmbed()
        if(posts.collector[0].authorMeta.verified == true){
            trending.setTitle(`User Info - @${posts.collector[0].authorMeta.name} <:Ver:750173291075076197>`)
        }
        else{
            trending.setTitle(`User Info - @${posts.collector[0].authorMeta.name}`)
        }
        trending.setDescription('Currently trending video.')
        .setURL(posts.collector[random_Number].webVideoUrl)
        .setThumbnail(posts.collector[random_Number].authorMeta.avatar)
        if(posts.collector[random_Number].text){
            trending.addField('Post Description',`${posts.collector[random_Number].text}`)
        }
        else{
            trending.addField('Post Description',`Null`)
        }
        var date = new Date(posts.collector[random_Number].createTime*1000)
        trending.addField('Post Date', dateFormat(date, 'dddd, mmmm dS, yyyy'))
        .addField("Views", number.formatNumber(`${posts.collector[random_Number].playCount}`),true)
        .addField("Comments", number.formatNumber(`${posts.collector[random_Number].commentCount}`),true)
        .addField("Hearts", number.formatNumber(`${posts.collector[random_Number].diggCount}`),true)
        .setFooter("TikTok Utilities by PapaSnags#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
        message.channel.send({embed: trending})
    } catch (error) {
        const embederr = new discord.MessageEmbed()
        .setColor('#FF0000')
        .setTitle(`Error`)
        .addField("An error has occured", error)
        .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
        message.channel.send({embed: embederr })
    }
})();
}