const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const util = require('minecraft-server-util');
const Canvas = require("canvas");

exports.run = (bot,message,args) => {
	if (!args[0] || !args[1]) {
    const embed2 = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
.setTitle('Veja todos os meus comandos clicando aqui!')
//.setImage('https://i.ibb.co/kcbG5vN/hug-34.gif')
.setURL('http://kelle.atwebpages.com/comandos')
.addFields(
        { name: '🤔', value: '**Como funciona o `server`?**'},
        { name: '😉', value: 'Você precisa digitar o tipo do servidor e, em seguida, seu IP e porta se for do tipo **Bedrock**.'},
        { name: 'Exemplo tipo **Java**:', value: '`.server java mc.hypixel.net`' },
        { name: 'Exemplo tipo **Bedrock**:', value: '`.server bedrock play.nethergames.org 19132`'})
.setColor('#6e33cc');
 message.lineReply(embed2);
  }
  if (args[0] === "java") {
    util.status(args[1])
    .then(async (response) => {
      const canvas = Canvas.createCanvas(128,128);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage(response.favicon);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

 // const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'serverIcon.png');

     const server = new MessageEmbed()
		.setColor('#ffff00')
		.setTitle('Informações do Server')
		.addField('IP do Server', response.host)
		.addField('Versão do Minecraft', response.version)
		.addField('Jogadores', response.onlinePlayers)
		.addField('Número máximo de jogadores', response.maxPlayers)
		.addField('Descrição do Server', response.description)
    .setThumbnail('attachment://serverIcon.png')
		.setFooter('Kelle Estella | 2020', bot.user.avatarURL());

		message.lineReply({ embed: server, files: [new Discord.MessageAttachment(canvas.toBuffer(), 'serverIcon.png')] });

    })
    .catch((error) => {
        throw error;
    });
  }
  if (args[0] === "bedrock") {
    util.statusBedrock(args[1], {port: parseInt(args[2])})
    .then((response) => {

     const server = new MessageEmbed()
		.setColor('#ffff00')
		.setTitle('Informações do Server')
		.addField('IP do Server', response.host)
		.addField('Versão do Minecraft', response.version)
		.addField('Jogadores', response.onlinePlayers)
		.addField('Número máximo de jogadores', response.maxPlayers)
		.addField('Descrição do Server', response.description)
     // .setThumbnail(`https://${response.favicon}`)
		.setFooter('Kelle Estella | 2020', bot.user.avatarURL());

		message.lineReply(server);

    })
    .catch((error) => {
        throw error;
    });
  }


}

exports.help = {
	name: ["server", "servidor", "minecraftServer"]
};