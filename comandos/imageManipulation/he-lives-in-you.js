const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();

exports.run = async (bot,message,args) => {
 
man = message.mentions.users.first() 
if (man) {

  linkAvatar = man.avatar;
  idAvatar = man.id;
  linkP = "https://cdn.discordapp.com/avatars/?";
	linkC = linkP.replace('?', `${man.id}/${man.avatar}.png?size=2048`);
  
   const attachment = `https://summonjs.xyz/api/he-lives-in-you?image=${linkC}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `he-lives-in-you.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))


} else {
  if (!args[0] || args[1] || args[2]) {
   message.lineReply("❌ | Você precisa digitar o link da imagem. Deixe apenas um espaço entre o comando e o link.")
 } else {
 const attachment = `https://summonjs.xyz/api/he-lives-in-you?image=${args[0]}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `he-lives-in-you.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))
 }

}
 
};
  
exports.help = {
	name: ["he-lives-in-you"]
};