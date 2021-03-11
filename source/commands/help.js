const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('TikTok Utilities - Help')
    .setURL("https://github.com/LachlanDev/TikTok-Utilities")
    .addFields(
        {name: "Profile", value: "Lookup a TikTok user's profile displaying their information. \n **Usage:** t!profile TikTok \n"},
        {name: "Feed", value: "Get the latest post from a TikTok user. \n **Usage:** t!feed TikTok \n"},
        {name: "Hashtag", value: "Lookup a TikTok hashtag displaying information. \n **Usage:** t!hash TikTok \n"},
        {name: "Trending", value: "Get a currently trending post. \n **Usage:** t!trending \n"},
        {name: "Help", value: "Sends This Help Message \n **Usage:** t!help\n"}
        )
        .setFooter("TikTok Utilities by LachlanDev#8014", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
    message.channel.send({embed: help })
};
