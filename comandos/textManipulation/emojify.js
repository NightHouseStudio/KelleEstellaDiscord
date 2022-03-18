const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
var fetchUrl = require("fetch").fetchUrl;

exports.run = async (bot,message,args) => {
 
 if (!args[0]) {
   message.lineReply("❌ | Você precisa digitar o texto. Deixe apenas um espaço entre o comando e o texto.")
 } else {
 texto = args.join(" ")

 url = `https://summonjs.xyz/api/emojify?text=${texto}`;
  const fetch = fetchUrl(encodeURI(url), function(error, meta, body){
    resultado = body.toString()

    if (resultado.includes(`{"status":"success","result":"`)) {

      textoR = resultado.split(`{"status":"success","result":"`);

      // console.log(textoR)

      textoS = `${textoR[1]}`.split('"}');

      // console.log(textoS)

      message.lineReply(textoS);

    } else {
      message.reply('❌ | ERRO! \nErro: `' + error + '`')
    }
  
})
 //const msg = await message.lineReply('Processando...')

 //message.lineReply(attachment)

 }
};
  
exports.help = {
	name: ["emojify"]
};