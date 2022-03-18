const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const disbut = require('discord-buttons');

exports.run = (bot,message,args) => {
if (message.guild.icon === null) {
  return message.reply('esse servidor não possui foto de perfil.')
} else {
  
 guildAvatar = `https://cdn.discordapp.com/icons/${message.guild.id}/${message.guild.icon}?size=2048`;
 const embed = new MessageEmbed()
 .setImage(guildAvatar)
 .setTitle("Avatar do servidor")
 .setColor('#0099ff')
 .setFooter("Avatar de " + message.guild.name, bot.user.avatarURL())
 .setTimestamp();
        
        let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL(guildAvatar)
      .setLabel("Download");

message.channel.send(embed, button)
}
};
  
exports.help = {
	name: ["guildavatar", "ga"]
};