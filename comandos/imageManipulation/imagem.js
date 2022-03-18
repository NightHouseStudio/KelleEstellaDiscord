
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();

exports.run = async (bot,message,args) => {
 
  message.lineReply('Os comandos de manipulação de imagens são:')
};
  
exports.help = {
	name: ["image", "imagem", "i"]
};