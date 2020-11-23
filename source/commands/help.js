const discord = require ("discord.js");

exports.run = (client, message, args) =>{
    const help = new discord.MessageEmbed()
    .setColor('#b434eb')
    .setTitle('TikTok Utilities - Help')
    .setURL("https://github.com/PapaSnags/TikTok-Utilities")
    .addFields(
        {name: "Profile", value: "Lookup a TikTok user's profile displaying their information. \n **Usage:** t!profile TikTok \n"},
        {name: "Hashtag", value: "Lookup a TikTok hashtag displaying information. \n **Usage:** t!hash TikTok \n"},
        {name: "Help", value: "Sends This Help Message \n **Usage:** t!help\n"}
        )
    .setFooter("TikTok Utilities by PapaSnags#1555", "https://cdn.discordapp.com/app-icons/779968259671457792/184465ca744886f62b39f100b52de9a0.png?")
    message.channel.send({embed: help })
};
