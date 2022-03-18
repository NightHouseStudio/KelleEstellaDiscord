
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();

exports.run = (bot,message,args) => {


	var ping = new Date().getTime() - message.createdTimestamp;
    message.lineReply(`🏓 Pong! **${ping} ms.**`);



};
  
exports.help = {
	name: ["ping"]
};