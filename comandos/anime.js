const Discord = require("discord.js");
const kitsu = require('node-kitsu');
const { MessageEmbed } = require('discord.js')
const disbut = require('discord-buttons');


exports.run = (bot, message, argument) =>{
  kitsu.searchAnime(argument, 0).then(results => {
        searchResult = results[0];
        if(!searchResult || !argument[0]){

const embed = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
 .addFields(
        {
          name: "❓ | Como funciona o comando `anime`?",
          value:
            "Você precisa apenas dizer o nome do anime que deseja ver sobre.",
          inline: false,
        },
        {
          name: "▶ | Utilização",
          value: "`anime <nome>`",
          inline: false,
        },
        { name: "💭 | Exemplo", value: "`anime Jojo's Bizarre Adventure`", inline: false }
      )
      .setTimestamp()
      .setFooter("Kelle Estella | 2021")
      .setColor("#6e33cc");

          message.lineReply(embed);

        }else{
          var animeID = searchResult.id;
          var titleEn = searchResult.attributes.titles.en;
          if(!titleEn){
              titleEn = "Título em inglês não encontrado."
          }
          var titleJP = searchResult.attributes.titles.en_jp;
          if(!titleJP){
              titleJP = "Título rōmaji não encontrado."
          }
          var title = searchResult.attributes.canonicalTitle;
          if(!title){
            if(!titleEn){
                title = titleEn;
            }else if(!titleJP){
                title = titleJP;
            }else{
                title = "Título canon não encontrado.";
            }
          }
          var synopsis = searchResult.attributes.synopsis;
          if(!synopsis){
              synopsis = "Sinopse não encontrada.";
          }
          var episodeCount = searchResult.attributes.episodeCount;
          if(!episodeCount){
              episodeCount = "Desconhecido";
          }
          var episodeLength = searchResult.attributes.episodeLength;
          if(!episodeLength){
              episodeLength = "Desconhecido";
          }
          var status = searchResult.attributes.status;
          var startDate = searchResult.attributes.startDate;
          if(!startDate){
              startDate = "Desconhecido";
          }
          var endDate = searchResult.attributes.endDate;
          if(!endDate){
              endDate = "Desconhecido";
          }                    
          var smallPoster = searchResult.attributes.posterImage.small;

          //If the synopsis is longer then 700 characters cut it off and add "..."
          //So the post doesn't become to long.
          if(synopsis.length > 700){
              var synopsis = synopsis.substring(0, 700) + '...';
          }
          //The Status returns lowercase "finished", This transforms it into "Finished"
          var statusUpper = status.charAt(0).toUpperCase() + status.substr(1).toLowerCase();

          const embed = new Discord.MessageEmbed()
               .setTitle(title)
               .setColor('#6e33cc')
               .setDescription("Status: "+statusUpper)
               .setFooter("Info by Kitsu.io ©2021", "https://i.imgur.com/8pMWE28.png")
               .setImage(smallPoster)
               .setTimestamp()
               .addField("Sinopse:", synopsis)
               .addField("Número de episódios:", episodeCount, true)
               .addField("Duração por episódio:", episodeLength+" minutos", true)
               .addField("English:", titleEn, true)
               .addField("Romanizado:", titleJP, true)
               .addField("Início:", startDate, true)
               .addField("Término:", endDate, true);


               let button = new disbut.MessageButton()
              .setStyle('url')
              .setURL("https://kitsu.io/anime/"+animeID)
              .setLabel('Ver anime no Kitsu.io');

               message.channel.send(embed, button);
        }//END if !searchresults
    });//END searchAnime
}

exports.help = {
  name: ["anime"]
}