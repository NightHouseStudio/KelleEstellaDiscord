const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();


exports.run = async (bot, message, args) => {

var list = [
'https://i.ibb.co/gZdbhkV/hug-1.gif',
'https://i.ibb.co/v1RcY0N/hug-2.gif',
'https://i.ibb.co/vP3gyV9/hug-3.gif',
'https://i.ibb.co/hmB9Nht/hug-4.gif',
'https://i.ibb.co/1rm5Mt2/hug-5.gif',
'https://i.ibb.co/zQ4Hcbd/hug-6.gif',
'https://i.ibb.co/1JdmK02/hug-7.gif',
'https://i.ibb.co/2dJMfpk/hug-8.gif',
'https://i.ibb.co/7NHJgWP/hug-9.gif',
'https://i.ibb.co/crNM4L3/hug-10.gif',
'https://i.ibb.co/QCdV8nL/hug-11.gif',
'https://i.ibb.co/pKHSMxs/hug-12.gif',
'https://i.ibb.co/bmLg53G/hug-13.gif',
'https://i.ibb.co/Rvs7XFF/hug-14.gif',
'https://i.ibb.co/J5W7LKC/hug-15.gif',
'https://i.ibb.co/yyPJRYJ/hug-17.gif',
'https://i.ibb.co/WzXn2vt/hug-18.gif',
'https://i.ibb.co/ZzbPVj2/hug-19.gif',
'https://i.ibb.co/3fbZ2n2/hug-20.gif',
'https://i.ibb.co/sv44Gp6/hug-22.gif',
'https://i.ibb.co/d4bPDBf/hug-23.gif',
'https://i.ibb.co/7Wpg2S7/hug-24.gif',
'https://i.ibb.co/rfxNJrq/hug-25.gif',
'https://i.ibb.co/B6Wpq0G/hug-26.gif',
'https://i.ibb.co/grGcvcq/hug-27.gif',
'https://i.ibb.co/2kV9Kny/hug-28.gif',
'https://i.ibb.co/VJbv9yL/hug-29.gif',
'https://i.ibb.co/3psYmSK/hug-30.gif',
'https://i.ibb.co/vVz3Zx5/hug-31.gif',
'https://i.ibb.co/fx53S7g/hug-32.gif',
'https://i.ibb.co/nsSjVGm/hug-33.gif',
'https://i.ibb.co/kcbG5vN/hug-34.gif',
'https://i.ibb.co/hYCCZtQ/hug-35.gif',
'https://i.ibb.co/SJbcNqN/hug-36.gif',
'https://i.ibb.co/KrBH2XH/hug-37.gif',
'https://i.ibb.co/0K2zQLg/hug-38.gif',
'https://i.ibb.co/K2DWxDx/hug-39.gif',
'https://i.ibb.co/NYxdQJB/hug-40.gif',
'https://i.ibb.co/QfyBhJV/hug-41.gif',
'https://i.ibb.co/cXLvhS6/hug-42.gif',
'https://i.ibb.co/sJVDvZq/hug-43.gif',
'https://i.ibb.co/KxLJzCn/hug-44.gif',
'https://i.ibb.co/GsKny2D/hug-45.gif',
'https://i.ibb.co/NCYkLhn/hug-46.gif',
'https://i.ibb.co/yVm5qfj/hug-47.gif',
'https://i.ibb.co/ZXDg1zG/hug-48.gif',
'https://i.ibb.co/mhKfwSn/hug-49.gif',
'https://i.ibb.co/c1mm8Vx/hug-50.gif',
'https://i.ibb.co/Vpjqvg4/hug-51.gif',
'https://i.ibb.co/H7CLcmv/hug-52.gif',
'https://i.ibb.co/T1gVMFv/hug-53.gif',
'https://i.ibb.co/B2Dw378/hug-54.gif',
'https://i.ibb.co/qy2sgbt/hug-55.gif',
'https://i.ibb.co/JFVnCKS/hug-56.gif',
'https://i.ibb.co/vJLBNhy/hug-57.gif',
'https://i.ibb.co/mFMyKkz/hug-58.gif',
'https://i.ibb.co/fCJF27z/hug-59.gif',
'https://i.ibb.co/Kjqp3qH/hug-60.gif',
'https://i.ibb.co/vc0cMHg/hug-61.gif',
'https://i.ibb.co/zNzHvJq/hug-62.gif',
'https://i.ibb.co/3C1m7rK/hug-63.gif',
'https://i.ibb.co/yY6R9sw/hug-64.gif',
'https://i.ibb.co/ZJ7dQ6W/hug-65.gif'
];




var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || bot.users.cache.get(args[0]);
if (!user) {
    const embed2 = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
.setTitle('Veja todos os meus comandos clicando aqui!')
.setImage('https://i.ibb.co/kcbG5vN/hug-34.gif')
.setURL('http://kelle.atwebpages.com/comandos')
.addFields(
        { name: '🤔', value: '**Como funciona o `hug`?**'},
        { name: '😉', value: 'Simples, você precisa apenas mencionar a pessoa que você quer abraçar.'},
        { name: 'Exemplo:', value: '`.hug @Kelle`' },)
  .addField('\u200B', 'Agora é só abraçar 🤗')
.setColor('#6e33cc');

return message.lineReply(embed2);
} else {
if (user.id === message.author.id) {
  message.lineReply('acho que não dá pra você dar um abraço em si mesmo, mas já que você está tão carente... <:kelle_cry:746498437809307690>')
  const embed = new Discord.MessageEmbed()
        .setColor('#6e33cc')
        .setDescription(`🤗 | <@712847305241264171> acaba de abraçar ${message.author}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('🤗', bot.user.avatarURL());
  message.lineReply(embed);
} else {

/*
message.lineReply(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setColor('#6e33cc')
        .setDescription(`🤗 | ${message.author} acaba de abraçar ${user}!`)
        .setImage(rand)
        .setTimestamp()
        .setFooter('🤗', bot.user.avatarURL())
  await message.lineReply(embed);
}
}
}

exports.help = {
  name: ["hug", "abracar", "abraçar"]
}