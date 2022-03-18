const Discord = require("discord.js");
const kitsu = require('node-kitsu');
const { MessageEmbed } = require('discord.js')

exports.run = (bot, message, argument) => {
  kitsu.searchManga(argument, 0).then(results => {
        searchResult = results[0];
        if(!searchResult){

const embed =  {
  "title": "Veja todos os meus comandos clicando aqui",
  "url": "http://kelle.atwebpages.com/comandos",
  "color": '#6e33cc',
  "timestamp": "2020-10-28T12:21:52.158Z",
  "image": {
    "url": "http://jojostars.com/wp-content/uploads/2019/10/Jojos-gifs-JojoStars.com-Gyro-Zeppeli-9.gif"
  },
  "author": {
    "name": "Kelle",
    "icon_url": "https://cdn.discordapp.com/avatars/712847305241264171/e40608b53205b9810e235d4cb75ee0ab.png?size=2048"
  },
  "fields": [
    {
      "name": "🤔",
      "value": "Como funciona o `+manga` ?"
    },
    {
      "name": "😉",
      "value": "Simples, você apenas precisa colocar um manga na frente do comando"
    },
    {
      "name": "Exemplo",
      "value": "`+manga jojo`"
    }
  ]
};

          message.lineReply({embed});
        }else{
          var mangaID = searchResult.id;
          var titleEn = searchResult.attributes.titles.en;
          if(!titleEn){
              titleEn = "English title Not Found."
          }
          var titleJP = searchResult.attributes.titles.en_jp;
          if(!titleJP){
              titleJP = "Rōmaji title Not Found."
          }
          var title = searchResult.attributes.canonicalTitle;
          if(!title){
            if(!titleEn){
                title = titleEn;
            }else if(!titleJP){
                title = titleJP;
            }else{
                title = "Canon Title Not Found.";
            }
          }
          var synopsis = searchResult.attributes.synopsis;
          if(!synopsis){
              synopsis = "Sinopse não encontrada";
          }
          var chapterCount = searchResult.attributes.chapterCount;
          if(!chapterCount){
              chapterCount = "Unknown";
          }
          var volumeCount = searchResult.attributes.volumeCount;
          if(!volumeCount){
              volumeCount = "Unknown";
          }
          var serialization = searchResult.attributes.serialization;
          if(!serialization){
              serialization = "Unknown";
          }
          var status = searchResult.attributes.status;
          var startDate = searchResult.attributes.startDate;
          if(!startDate){
              startDate = "Unknown";
          }
          var endDate = searchResult.attributes.endDate;
          if(!endDate){
              endDate = "Unknown";
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
               .setURL("https://kitsu.io/anime/"+mangaID)
               .addField("Sinopse:", synopsis)
               .addField("Magazine:", serialization)
               .addField("Capítulos:", chapterCount, true)
               .addField("Volumes:", volumeCount,true)
               .addField("English:", titleEn, true)
               .addField("Romanized:", titleJP, true)
               .addField("Início:", startDate, true)
               .addField("Termino:", endDate, true);
               message.lineReply({embed});
        }
    });
}

exports.help = {
  name: ["manga"]
}