const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {

var list = [
'https://i.ibb.co/kgVcfKW/Kiss-11.gif',
'https://i.ibb.co/GtgLxnk/Kiss-12.gif',
'https://i.ibb.co/N9Znd0M/Kiss-13.gif',
'https://i.ibb.co/5GpVQcS/Kiss-14.gif',
'https://i.ibb.co/fHHqVJ9/Kiss-15.gif',
'https://i.ibb.co/f9PPq5K/Kiss-16.gif',
'https://i.ibb.co/MVtGkNm/Kiss-17.gif',
'https://i.ibb.co/c6XpMk8/Kiss-18.gif',
'https://i.ibb.co/NVqrbZn/Kiss-19.gif',
'https://i.ibb.co/JCZBFsQ/Kiss-20.gif',
'https://i.ibb.co/jy3nq9t/Kiss-21.gif',
'https://i.ibb.co/KFVCLvw/Kiss-22.gif',
'https://i.ibb.co/LnRZG6W/Kiss-23.gif',
'https://i.ibb.co/6NYw4X2/Kiss-24.gif',
'https://i.ibb.co/DpPHjY0/Kiss-25.gif',
'https://i.ibb.co/xHSLBnY/Kiss-26.gif',
'https://i.ibb.co/RYPt4TH/Kiss-27.gif',
'https://i.ibb.co/fvJxJ5T/Kiss-28.gif',
'https://i.ibb.co/rdWPwPr/Kiss-29.gif',
'https://i.ibb.co/YTnd43j/Kiss-30.gif',
'https://i.ibb.co/Bj6GXNx/Kiss-31.gif',
'https://i.ibb.co/VT0sJ2k/Kiss-32.gif',
'https://i.ibb.co/3MHNTXF/Kiss-33.gif',
'https://i.ibb.co/9Zt0RKn/Kiss-34.gif',
'https://i.ibb.co/2vVcNxR/Kiss-35.gif',
'https://i.ibb.co/Gc40R4W/Kiss-36.gif',
'https://i.ibb.co/McL6cDN/Kiss-37.gif',
'https://i.ibb.co/SVQ0bY9/Kiss-1.gif',
'https://i.ibb.co/v1zdbzn/Kiss-2.gif',
'https://i.ibb.co/QPZV120/Kiss-3.gif',
'https://i.ibb.co/V2mH7Mx/Kiss-4.gif',
'https://i.ibb.co/0rm3L67/Kiss-5.gif',
'https://i.ibb.co/CKm54G1/Kiss-6.gif',
'https://i.ibb.co/3zgmQKC/Kiss-7.gif',
'https://i.ibb.co/9GzhDQv/Kiss-8.gif',
'https://i.ibb.co/fDJFsjw/Kiss-2.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);

if (!user) {


    const embed2 = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
.setTitle('Veja todos os meus comandos clicando aqui!')
.setImage('https://i.ibb.co/9Zs1h3F/kiss12.gif')
.setURL('http://kelle.atwebpages.com/comandos')
.addFields(
        { name: '🤔', value: '**Como funciona o `kiss`?**'},
        { name: '😉', value: 'Simples, você precisa apenas mencionar a pessoa quem você quer beijar.'},
        { name: 'Exemplo:', value: '`.kiss @Kelle`' },)
  .addField('\u200B', 'Agora é só beijar 😘')
.setColor('#6e33cc');

return message.lineReply(embed2);
} else {
  if (user.id === message.author.id) {
  message.lineReply('acho que é meio impossível dar um beijo em si mesmo. 🤷')
} else {
/*
message.lineReply(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#6e33cc')
        .setDescription(`😘 | ${message.author} acaba de beijar ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter(`😘`, bot.user.avatarURL())
  await message.lineReply(embed)
}
}
}

exports.help = {
  name: ["kiss", "beijar"]
}