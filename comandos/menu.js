const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const disbut = require('discord-buttons');


exports.run = (bot,message,args) => {
  

let option = new disbut.MessageMenuOption()
    .setLabel('Your Label')
    .setEmoji('🍔')
    .setValue('menuid')
    .setDescription('Custom Description!')

let option2 = new disbut.MessageMenuOption()
    .setLabel('Your 2')
    .setEmoji('😎')
    .setValue('menuidd')
    .setDescription('Custom Description!')
    
let select = new disbut.MessageMenu()
    .setID('customid')
    .setPlaceholder('Click me! :D')
    .setMaxValues(1)
    .setMinValues(1)
    .addOption(option)
    .addOption(option2)

message.channel.send('Text with menu!', select);

  };

exports.help = {
	name: ["menu", "m"]
}