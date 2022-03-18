const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const disbut = require('discord-buttons');


exports.run = (bot,message,args) => {
	var link = "https://tlauncher.org/skin.php/?username_catalog=nickname&username_file=z";
	var link2 = "https://tlauncher.org/upload/all/nickname/y"
var linkP = link.replace("z", `${args[0]}.png&`);
var linkD = link2.replace("y", `${args[0]}.png`);
	if (!args[0]) return message.lineReply('utilize **.skin <Nickname>.**');
	const panel = new MessageEmbed()
	.setColor('#0099ff')
	.addField('Nickname', `*${args[0]}*`)
	.addField('Fonte', '*TLauncher*')
  .setFooter("Kelle Estella | 2021", bot.user.avatarURL())
	.setImage(linkP);

              let button = new disbut.MessageButton()
              .setStyle('url')
              .setURL(linkD)
              .setLabel("Baixar skin");

    message.channel.send(panel, button)

    // Send the user's avatar URL
      
    // Send the embed to the same channel as the message

  };

exports.help = {
	name: ["skin", "minecraftSkin"]
}