	const Discord = require("discord.js");
	const { MessageEmbed } = require("discord.js");


	exports.run = async (client, message, args) => {
		if(!message.member.hasPermission("MANAGE_MESSAGES")) {	
			const fraco =  new MessageEmbed()
			.setImage("https://i.ibb.co/1K33C4W/images-34.jpg")
			.setColor('#0099ff')
			.setAuthor("Falta de permissão","https://i.ibb.co/wBpPW9q/mooncry.png");
			message.reply("você é fraco, lhe falta permissão para Gerenciar Mensagens.");
			message.channel.send(fraco);

		} else {
			if (!args[0]) return message.reply('utilize **.limpar <número>.**')
		const deleteCount = parseInt(args[0], 10);
		if (!deleteCount || deleteCount <1 || deleteCount > 100)
			return message.reply("forneça um número de 1 à 100 mensagens para apagar por vez.");

		var apagar = message.channel.bulkDelete(deleteCount);
    if (apagar) {
      message.reply(`você apagou **${args[0]} mensagens!**`)
    } else {
      message.reply('não foi possível apagar as mensagens pois elas podem ter mais de 2 semanas.')
    }
		}

	};
exports.help = {
	name: ["limpar"]
};