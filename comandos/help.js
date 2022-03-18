const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
const prefix = require("../models/prefix");
const pagination = require("discord.js-pagination")
const disbut = require('discord-buttons');


exports.run = async (bot,message,args,avatar) => {

  const data = await prefix.findOne({
      GuildID: message.guild.id
    })

     if (data) {
      const prefix = data.Prefix;
const page1 = new MessageEmbed()
.setTitle("🛠️ - Utilitários")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 1/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("4 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField("🤳 | Ver seu avatar", "`"+ prefix+"avatar`")
.addField("📷 | Ver o avatar de outras pessoas", "`"+ prefix +"avatar @usuario` ou `" + prefix + "avatar <id>`")
.addField("📶 | Checar o seu ping", "`"+ prefix+"ping`")
.addField("📊 | Configurar uma votação/enquete", "`"+ prefix + "poll`")
.addField('⏲ | Iniciar um temporizador', "`" + prefix + "timer <segundos>`")
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed);

const page2 = new MessageEmbed()
.setTitle("👥 - Interações")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 2/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("2 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField('😘 | Beijar alguém', '`'+ prefix + "kiss @usuário`")
.addField('🤗 | Abraçar alguém', '`'+ prefix + 'hug @usuário`')
.addField('🥶 | Gerar algum assunto para discussão', '`'+ prefix + 'gerarassunto`')
.addField('👊 | Jogar jokenpô comigo', '`' + prefix + 'jokenpo`')
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed); 

const page3 = new MessageEmbed()
.setTitle("🖼️ - Manipulação de Imagens")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 3/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("2 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField(`JoJo Art` , '`' + prefix +"jojo <personagem> <texto>` \n `" + prefix + "jojo` para ver os personagens disponíveis.")
.addField("Classic Style Meme", "`" + prefix + "meme <linkDaImagem> <texto>`")
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed); 

const pages = [
  page1,
  page2,
  page3
]

const emoji = ["⏪", "⏩"]

let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://twitter.com/BotKelle') 
  .setLabel('Meu Twitter');

let button2 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://botkelle.web.app') 
  .setLabel('Meu website');

let button3 = new disbut.MessageButton()
  .setStyle('url')
  .setURL('https://github.com/BotKelle') 
  .setLabel('Meus códigos');


message.channel.send("⠀", {
  buttons: [
			   button, button2, button3
			 ]
})
pagination(message, pages, emoji, null)

  } else if (!data) {
  const prefix = "k."
    
const page1 = new MessageEmbed()
.setTitle("🛠️ - Utilitários")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 1/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("4 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField("🤳 | Ver seu avatar", "`"+ prefix+"avatar`")
.addField("📷 | Ver o avatar de outras pessoas", "`"+ prefix +"avatar @usuario` ou `" + prefix + "avatar <id>`")
.addField("📶 | Checar o seu ping", "`"+ prefix+"ping`")
.addField("📊 | Configurar uma votação/enquete", "`"+ prefix + "poll`")
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed);

const page2 = new MessageEmbed()
.setTitle("👥 - Interações")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 2/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("2 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField('😘 | Beijar alguém', '`'+ prefix + "kiss @usuário`")
.addField('🤗 | Abraçar alguém', '`'+ prefix + 'hug @usuário`')
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed); 

const page3 = new MessageEmbed()
.setTitle("🖼️ - Manipulação de Imagens")
//.setURL("http://botkelle.web.app/comandos")
.setAuthor("Meus comandos - Página 3/3", bot.user.avatarURL())
.setColor(0x00AE86)
.setDescription("2 Comandos \n**Meu prefixo neste servidor é `" + prefix + "`**" )
.setFooter("Kelle Estella | v.1.0.0")
.addField(`JoJo Art` , '`' + prefix +"jojo <personagem> <texto>` \n `" + prefix + "jojo` para ver os personagens disponíveis.")
.addField("Classic Style Meme", "`" + prefix + "meme <linkDaImagem> <texto>`")
.setThumbnail("https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048")
.setTimestamp();
//message.reply('mandei uma lista de comandos na sua DM! 😊');
//message.channel.type === (`"dm"`) + message.author.send(embed); 

const pages = [
  page1,
  page2,
  page3
]

const emoji = ["⏪", "⏩"]

message.lineReply(`${message.author}`, )
pagination(message, pages, emoji, null)
  }
}
exports.help = {
	name: ["help", "ajuda", "comandos"]
}