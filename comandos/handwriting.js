
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
//const handwritten = require('handwritten.js')
const fs = require('fs')

exports.run = (bot,message,args) => {
// const texto = args.join(" ")

// // handwritten(texto, { ruled: true, outputtype: "jpeg/b64" })
//   fileName = `./handwriting${Math.floor(Math.random() * 100000)}.pdf`;
// handwritten(`${texto}`).then((converted) => {
//    arquivo = converted.pipe(fs.createWriteStream(fileName));

//     const attachment = new Discord.MessageAttachment(fileName);

// 	  message.lineReply(attachment).then(() => {     
//   fs.unlink(`${fileName}`, function(err) {
// if (err) {
//  throw err
// } 
// else {
// console.log("Handwriting PDF deletado com sucesso!") // Avisando no console que a imagem foi deletada do diretório
//    }
//   })
//     });
// })
	

// message.lineReply('função em manutenção, luis nao soube fazer o bgl kkkkkkkkkkkkkkkkkkkk')
};
  
exports.help = {
	name: ["handwriting", "escritaamao", "escreveramao"]
};