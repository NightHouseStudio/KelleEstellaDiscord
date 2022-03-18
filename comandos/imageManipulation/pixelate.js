const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const pixelated = require('pixelated');

exports.run = async (bot,message,args) => {
 
man = message.mentions.users.first() 
if (man) {

  linkAvatar = man.avatar;
  idAvatar = man.id;
  linkP = "https://cdn.discordapp.com/avatars/?";
	linkC = linkP.replace('?', `${man.id}/${man.avatar}.png?size=2048`);
  
  const promise = pixelated({
    input: linkC,
    output: 'out.png', // defaults to 'in_pixelated.png'
    pixel: 50, // defaults to 20
    greyscale: true //defaults to false
  })

//    const attachment = `https://summonjs.xyz/api/sora-selfie?image=${linkC}`

//  //const msg = await message.lineReply('Processando...')

//  message.lineReply({ files: [{ name: `sora-selfie.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))


} else {
  if (!args[0] || args[1] || args[2]) {
   message.lineReply("❌ | Você precisa digitar o link da imagem. Deixe apenas um espaço entre o comando e o link.")
 } else {
 const attachment = `https://summonjs.xyz/api/sora-selfie?image=${args[0]}`

 //const msg = await message.lineReply('Processando...')

 message.lineReply({ files: [{ name: `sora-selfie.png`, attachment }] }).catch(err => message.lineReply("❌ | ERRO! \n Erro: `" + err + "`"))
 }

}
 
};
  
exports.help = {
	name: ["pixelate"]
};