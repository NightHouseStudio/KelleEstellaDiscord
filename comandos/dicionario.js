var request = require('request');




var cheerio = require("cheerio");

 const Discord = require('discord.js');
const { MessageEmbed } = require("discord.js");
const bot =  new Discord.Client();
const disbut = require('discord-buttons');

exports.run = (bot,message,args) => {

texto = `${args}`;
palavra = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
var termo = palavra.replace(/,/g, '-');

var url = "https://www.dicio.com.br/" + termo + "/";


request(url, function(err, res, body) {

    if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body);

if (err) console.log('Erro: ' + err);

    var $ = cheerio.load(body, {
  xml: {
    normalizeWhitespace: true,
    decodeEntities: true, // Decode HTML entities.
    withStartIndices: false, // Add a `startIndex` property to nodes.
    withEndIndices: false, // Add an `endIndex` property to nodes.
  }
});


        var secao = [];
$('.tit-section').each(function (index, element) {
  secao.push($(element).text())
});

        var adicional = [];
$('.adicional').each(function (index, element) {
  adicional.push("- " + $(element).text())
});

        var list = [];
$('.tit-exemplo').each(function (index, element) {
  list.push($(element).text())
});

        var frases = [];
$('.frases').find('div').each(function (index, element) {
  frases.push("● " + $(element).text())
});

        var tss = [];
$('.significado').find('span').each(function (index, element) {
  tss.push("- " + $(element).text())
});
//console.dir(list);
    $('.title-header h1').each(function() {
 var title = $(this).text();

 const capitalized = title[0].toUpperCase() + title.substr(1);
 
const embed = new MessageEmbed()
.setFooter("Informações por Dicio.com.br © 2021", "https://i.ibb.co/0JvCbLb/dicio-com-br.png")
.setTitle(capitalized)
.setColor('#1c6fa7')
.setTimestamp()
.addField("🔤 | Significado de " + title, tss)
.addField("❗ | Informações adicionais", adicional)
.addField("💬 | " + list[0], frases[2] + "\n" + frases[1])

               let button = new disbut.MessageButton()
              .setStyle('url')
              .setURL(url)
              .setLabel('Ver definição em Dicio.com.br');

message.channel.send(embed, button)


    })



        // var text = $(this).find('.significado > span').text()
        // var link = $(this).find('a').attr('href');
        // var capa = $(this).find('a .aniItemImg img').attr('src');
      // kk = text.replace(/<br>/g, '\n')
       //console.log(text)

        
});

};
  
exports.help = {
	name: ["dicio", "dicionario", "significado"]
};