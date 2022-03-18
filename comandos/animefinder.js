
 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
let Sauce = require('node-sauce')
let sauce = new Sauce("c4282f6f2976942e38895a4da17b4f738eeb3b99");
const disbut = require('discord-buttons');


exports.run = async(bot,message,args) => {

if (!args[0] || args[1] || args[2]) {
  const embed = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
 .addFields(
        {
          name: "❓ | Como funciona o comando `animefinder`?",
          value:
            "Você envia o link de uma screenshot e eu direi de qual anime veio essa imagem.",
          inline: false,
        },
        {
          name: "▶ | Utilização",
          value: "`animefinder <link>`",
          inline: false,
        },
        { name: "💭 | Exemplo", value: "`animefinder https://site.com/animescreenshot.png`", inline: false },
        { name: "🔎 | Alternativas", value: "`af`", inline: false }
      )
      .setTimestamp()
      .setFooter("Kelle Estella | 2021")
      .setColor("#6e33cc");

          message.lineReply(embed);
} else {
    // predefine number of results
    sauce.numres = 1

    // from url
    sauce(args[0]).then((results) => {

  const titulo = results[0].source,
        porcentagem = results[0].similarity + "%",
        ano = results[0].year,
        episodio = results[0].part,
        tempoEstimado = results[0].est_time,
        url = results[0].ext_urls[0],
        thumbnail = results[0].thumbnail;

      if (titulo === undefined && ano === undefined && episodio === undefined) {

        embedErro = new MessageEmbed()
        .setTitle("❌ | Erro na procura!")
        .setDescription('Desculpe, mas por essa screenshot, não consegui localizar o anime procurado. \nVocê pode selecionar outra screenshot e tentar novamente!')
        .setColor("#9400d3")
        .setTimestamp()
        .setFooter('Kelle Estella | 2021', bot.user.avatarURL())

        message.lineReply(embedErro)
      } else {


     if (titulo === undefined) {
       titulo = "Título desconhecido";
     }

     if (porcentagem === undefined) {
       porcentagem = "Nada informado";
     }

     if (ano === undefined) {
       ano = "Nada informado";
     }

     if (episodio === undefined) {
       episodio = "Nada informado";
     }

     if (tempoEstimado === undefined) {
       tempoEstimado = "Nada informado";
     }
     
      embed = new MessageEmbed()
      .setTitle(titulo)
      .addField('Porcentagem de similaridade', porcentagem)
      .addField('Ano', ano, true)
      .addField('Episódio', episodio, true)
      .addField('Tempo estimado', tempoEstimado, true)
      .setImage(thumbnail)
      .setTimestamp()
      .setColor("#9400d3")
      .setFooter('Kelle Estella | 2021', bot.user.avatarURL())
      
      let button = new disbut.MessageButton()
  .setStyle('url')
  .setURL(url) 
  .setLabel('AniDB');

      message.channel.send(embed, button)
      }
    }).catch( err => {
   embedErro = new MessageEmbed()
        .setTitle("❌ | Erro na procura!")
        .setDescription('Desculpe, mas por essa screenshot, não consegui localizar o anime procurado. \nVocê pode selecionar outra screenshot e tentar novamente!')
        .setColor("#9400d3")
        .setTimestamp()
        .setFooter('Kelle Estella | 2021', bot.user.avatarURL())

        message.lineReply(embedErro)

    })

}

};
  
exports.help = {
	name: ["animefinder", "af"]
};