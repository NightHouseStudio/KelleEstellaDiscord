const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
const disbut = require('discord-buttons');


exports.run = (bot,message,args,avatar) => {

  // String with some numbers
const str = `${args[0]}`;

// Check if string contians numbers
const isOnlyNumbers = /^\d+$/.test(str);

if (!args[0]) {
	var one = message.author.displayAvatarURL();
var joined = one.replace(".webp", ".png?size=2048");
 const avatar = new MessageEmbed()
		.setColor('#0099ff')
 		.setTitle(`Avatar do usuário`)
	 		.setImage(joined) 
	 		.setDescription(`:flushed: | <@${message.author.id}>, seu avatar é esse:`)
       .setFooter('Use **avatar @usuario** para visualizar o avatar de outras pessoas.', bot.user.avatarURL())
       .setTimestamp();
       
       let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL(joined)
      .setLabel("Download");

	 	message.channel.send(avatar, button);

	 } else {

      if (isOnlyNumbers === true) {
bot.users.fetch(args[0]).then(myUser => {
    var one = myUser.avatarURL();
    var nomeAlheio = myUser.username;

    var joined = one.replace(".webp", ".png?size=2048");
    const avatarAlheio = new MessageEmbed()
		.setColor('#0099ff')
 		.setTitle(`Avatar do usuário`)
	 		.setImage(joined) 
	 		.setDescription(` :flushed: | Avatar de **${nomeAlheio}**: \n \nSolicitado por <@${message.author.id}>.`)
      .setFooter('Kelle Estella | 2021', bot.user.avatarURL())
      .setTimestamp()

      let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL(joined)
      .setLabel("Download");
	 	
     message.channel.send(avatarAlheio, button)

});
} else {
		man = message.mentions.users.first();
 tru = man.avatar;
 user = man.id;
linkP = "https://cdn.discordapp.com/avatars/?";
	linkC = linkP.replace('?', `${man.id}/${man.avatar}.png?size=2048`);
	var one = message.author.displayAvatarURL();
var joined = one.replace(".webp", ".png?size=2048");
 const avatarAlheio = new MessageEmbed()
		.setColor('#0099ff')
 		.setTitle(`Avatar do usuário`)
	 		.setImage(linkC) 
	 		.setDescription(` :flushed: | Avatar de <@${user}>: \n \nSolicitado por <@${message.author.id}>.`)
      .setFooter('Kelle Estella | 2021', bot.user.avatarURL())
      .setTimestamp()
	 	
      let button = new disbut.MessageButton()
       .setStyle('url')
       .setURL(linkC)
      .setLabel("Download");

      message.channel.send(avatarAlheio, button)

	 } 

   }

	  
    // Send the user's avatar URL
      
    // Send the embed to the same channel as the message
  };

exports.help = {
	name: ["avatar", "fotoperfil", "fotoDoPerfil"]
}