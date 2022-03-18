
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const disbut = require('discord-buttons');

exports.run = (bot,message,args) => {


let pedra = new disbut.MessageButton()
  .setStyle('blurple')
  .setLabel('Pedra 🪨') 
  .setID('pedra');

let papel = new disbut.MessageButton()
  .setStyle('green')
  .setLabel('Papel 📃') 
  .setID('papel');

let tesoura = new disbut.MessageButton()
  .setStyle('red')
  .setLabel('Tesoura ✂') 
  .setID('tesoura');


message.channel.send('Certo! Vamos jogar **pedra, papel, tesoura**. \nEscolha uma opção: ', {
  buttons: [
    pedra, papel, tesoura
  ]
});


// if (!args[0]) {
//   message.lineReply("Você precisa dizer com qual objeto quer jogar: `pedra`, `papel` ou `tesoura`.")
// } else {
//   const escolhido = args[0].toLowerCase()
//   if (escolhido == "pedra" || escolhido == "papel" || escolhido == "tesoura") {

//     const objetos = [
//        "pedra",
//        "papel",
//        "tesoura"
//     ]

//     sorteiaObjeto = objetos[Math.floor(Math.random() * 3)];

// // se o usuário colocar pedra
     
//       if (escolhido == "pedra" && sorteiaObjeto == "tesoura") {
//       message.lineReply("**Você ganhou!** Você escolheu `" + escolhido + "` 🪨, e eu `tesoura` ✂!");


//     }

//       if (escolhido == "pedra" && sorteiaObjeto == "papel") {
//       message.lineReply("**Eu ganhei!** Você escolheu `" + escolhido + "` 🪨, e eu `papel` 📃!");

//     }

//           if (escolhido == "pedra" && sorteiaObjeto == "pedra") {
//       message.lineReply("**EMPATE!** Ambos escolhemos `" + escolhido + "` 🪨!");

//     }


// // se o usuário colocar tesoura
//          if (escolhido == "tesoura" && sorteiaObjeto == "papel") {
//       message.lineReply("**Você ganhou!** Você escolheu `" + escolhido + "` ✂, e eu `papel` 📃!");

//     }

//       if (escolhido == "tesoura" && sorteiaObjeto == "pedra") {
//       message.lineReply("**Eu ganhei!** Você escolheu `" + escolhido + "` ✂, e eu `pedra` 🪨!");

//     }

//           if (escolhido == "tesoura" && sorteiaObjeto == "tesoura") {
//       message.lineReply("**EMPATE!** Ambos escolhemos `" + escolhido + "` ✂!");

//     }


// // se o usuário colocar papel

//                if (escolhido == "papel" && sorteiaObjeto == "pedra") {
//       message.lineReply("**Você ganhou!** Você escolheu `" + escolhido + "` 📃, e eu `pedra` 🪨!");

//     }

//       if (escolhido == "papel" && sorteiaObjeto == "tesoura") {
//       message.lineReply("**Eu ganhei!** Você escolheu `" + escolhido + "` 📃, e eu `tesoura` ✂!");

//     }

//           if (escolhido == "papel" && sorteiaObjeto == "papel") {
//       message.lineReply("**EMPATE!** Ambos escolhemos `" + escolhido + "` 📃!");

//     }

//   } else {
//     message.lineReply("Esse objeto não está disponível. Apenas `pedra`, `papel` e `tesoura`.")
//   }
// }
};
  
exports.help = {
	name: ["jokenpô", "jokenpo", "pedrapapeltesoura"]
};