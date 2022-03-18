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
  
   const attachment = `https://summonjs.xyz/api/rip?image=${linkC}&name=${man.username}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `rip.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))


} else {
  if (!args[0] || !args[1]) {
   message.lineReply("❌ | Você precisa digitar o link da imagem e o nome. Deixe apenas um espaço entre o comando e o link.")
 } else {

   texto2 = args.join(" ");
   texto = texto2.replace(args[0], '')
 const attachment = `https://summonjs.xyz/api/rip?image=${args[0]}&name=${texto}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `rip.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))
 }

}
 
};
  
exports.help = {
	name: ["rip"]
};