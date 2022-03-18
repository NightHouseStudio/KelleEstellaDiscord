
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
var porreta = require('porreta');

exports.run = (bot,message,args) => {

palavra = porreta();

message.lineReply(palavra)
};
  
exports.help = {
	name: ["palavra"]
};