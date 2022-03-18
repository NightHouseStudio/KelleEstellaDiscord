const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {


message.lineReply("❌ | Você foi banido de usar esse comando! \nMotivo: `Nada informado.`")

setTimeout(() => {
message.reply('brincadeira hahaha. Parece que você descobriu um comando secreto. Infelizmente você não pode usá-lo. :(')

}, 10000)
// const fs = require('fs');
// var voiceChannel = message.member.voice.channel;
// if (!voiceChannel) {
//   message.reply('entre em um canal de voz primeiro!');
// } else {
// const audio = [
//  'http://kelle.atwebpages.com/audio1.ogg',
//   'http://kelle.atwebpages.com/audio2.ogg',
//   'http://kelle.atwebpages.com/audio3.ogg',
//   'http://kelle.atwebpages.com/audio4.ogg',
//   'http://kelle.atwebpages.com/audio5.ogg',
//   'http://kelle.atwebpages.com/audio6.ogg',
//   'http://kelle.atwebpages.com/audio7.ogg',
//   'http://kelle.atwebpages.com/audio8.ogg',
//   'http://kelle.atwebpages.com/audio9.ogg',
//     'http://kelle.atwebpages.com/audio10.ogg',
//     'http://kelle.atwebpages.com/audio11.ogg',
//     'http://kelle.atwebpages.com/audio12.ogg',
//     'http://kelle.atwebpages.com/audio13.ogg',
//     'http://kelle.atwebpages.com/audio14.ogg',
//     'http://kelle.atwebpages.com/audio15.ogg',
//     'http://kelle.atwebpages.com/audio16.ogg',
//     'http://kelle.atwebpages.com/audio17.ogg',
//     'http://kelle.atwebpages.com/audio18.ogg',
//     'http://kelle.atwebpages.com/audio19.ogg',
//     'http://kelle.atwebpages.com/audio20.ogg',
//     'http://kelle.atwebpages.com/audio21.ogg',
//     'http://kelle.atwebpages.com/audio22.ogg',
//     'http://kelle.atwebpages.com/audio23.ogg',
//     'http://kelle.atwebpages.com/audio24.ogg'

// ]
// audioGen = audio[Math.floor(Math.random() * 24)];
// if (args[0] === 'play') {
// const msg = await message.channel.send('**<a:roll:786648195316580432> | Sorteando áudio...**')
// setTimeout(() => {
//     msg.edit('**▶ | Reproduzindo áudio...**');    }, 3000);    
//   voiceChannel.join()
//   .then(connection => {
//     connection.play(audioGen, { volume: 1}).on("finish", () => {
//       msg.edit(`**✅ | O áudio foi reproduzido. \nDeseja baixá-lo ou escutá-lo novamente? \nLink: ${audioGen}**`);
//     });;
//   })
// }
// if (args[0] === 'leave') {
//   voiceChannel.leave();
//   message.reply('**fui desconectada do canal de voz.**')
// }
  
// }

  }


exports.help = {
  name: ["audio"]
}