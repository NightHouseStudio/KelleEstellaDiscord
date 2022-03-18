
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();

exports.run = async (bot,message,args) => {
 
 numero = parseFloat(args[0]);
 if (!args[0] || !numero || numero > 100 || numero < 1) {
   message.lineReply("❌ | Você precisa digitar a quantidade de `cursed-sponges` que você quer (mín. 1, máx. 100). Deixe apenas um espaço entre o comando e o texto.")
 } else {
 const attachment = `https://summonjs.xyz/api/cursed-sponge?amount=${numero}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `cursed-sponge.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))
 }
};
  
exports.help = {
	name: ["cursed-sponge"]
};