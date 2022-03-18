const prefixModel = require("../models/prefix");
const { MessageEmbed } = require("discord.js");

exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) {	
      return;
		} else {

      const data = await prefixModel.findOne({
      GuildID: message.guild.id
    })

    if (!args[0]) return message.lineReply("**❌ | Você precisa dizer qual o prefixo que quer utilizar!**");

    if (args[0].length > 5) return message.lineReply("**❌ | O prefixo precisa ser menor que 5 caracteres.**")


    if (data) {
        await prefixModel.findOneAndRemove({
        GuildID: message.guild.id
      })
    linkP = "https://cdn.discordapp.com/avatars/?";
        linkC = linkP.replace('?', `${message.author.id}/${message.author.avatar}.png?size=2048`);
        const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, linkC)
        .setColor('#6e33cc')
        .addField('Prefixo alterado!', `Por: ${message.author} \nNovo prefixo: \`${args[0]}\``)
        .setFooter('Kelle Estella | 2021', bot.user.avatarURL())
      
      message.lineReply(embed)

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id
      })

      newData.save();
    } else if (!data) {
         linkP = "https://cdn.discordapp.com/avatars/?";
        linkC = linkP.replace('?', `${message.author.id}/${message.author.avatar}.png?size=2048`);
        const embed = new MessageEmbed()
        .setAuthor(`${message.author.username}`, linkC)
        .setColor('#6e33cc')
        .addField('Prefixo alterado!', `Por: ${message.author} \nNovo prefixo: \`${args[0]}\``)
        .setFooter('Kelle Estella | 2021', bot.user.avatarURL())
      
      message.lineReply(embed)

      let newData = new prefixModel({
        Prefix: args[0],
        GuildID: message.guild.id
      })

      newData.save();

    }
};

}
  
exports.help = {
	name: ["setprefix", "mudarprefixo"],
  aliases: []
};