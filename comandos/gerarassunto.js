const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

exports.run = async (bot, message, args) => {


const perguntas = [
 'Você gosta de jogar/apostar?',
  'Você já chorou em algum filme da Disney?',
  'Qual é a sua série favorita? E qual está vendo agora?',
  'Qual a sua teoria da conspiração favorita?',
  'Se você pudesse instantaneamente se tornar um especialista em alguma coisa, o que seria?',
  'Qual foi a última coisa que você pesquisou no Google?',
  'Se você fosse injustamente colocado em um asilo de loucos, como você convenceria a equipe de que você é realmente são?',
  'Se você fosse um animal, que animal você gostaria de ser e por que?',
  'Qual é o fato mais inútil que você conhece?',
  'Quão útil você seria em um apocalipse zumbi?',
  'Se você tivesse que se tornar um objeto inanimado por um ano, que objeto você escolheria ser, e por que?',
  'Você gosta de animes? Quais?',
  'Você seria a “namorada” do Bill Gates por três dias em troca de metade da fortuna dele?',
  'O que você acha de áudios do WhatsApp?',
  'Qual é a primeira rede social que você vê de manhã?',
  'Qual foi o último filme que você viu e odiou?',
    'Qual foi o último filme que você viu e AMOU?',
    'Qual animal parece mais simpático, um pato ou um golfinho?',
    'Toddy ou Nescau?',
    'Você acha que bebês conversam uns com os outros?',
    'Que série você jamais reveria?',
    'O que você faria se achasse R$ 50 na rua?',
    'Qual é o aplicativo mais inútil do seu celular?',
    'Qual foi a última vez que você precisou usar a Fórmula de Bhaskara?',
    'Você prefere passar muito frio ou muito calor?',
    'Qual é sua opção favorita no restaurante por quilo?',
    'Você é contra ou a favor de comer macarrão com arroz?',
    'Você põe o arroz por cima do feijão ou o feijão por cima do arroz? Ou você mete o loko e mistura tudo?',
    'Você está dormindo e sobe uma barata na sua cara. Você prefere continuar dormindo e nunca saber ou acordar e fazer alguma coisa?',
    'Você já leu algum manual de instrução?'

]
if (args[0] === 'qtd') {
  message.reply(`eu possuo **${perguntas.length}** assuntos aleatórios no meu BD. Por enquanto... 😏`)
} else {
perguntaGen = perguntas[Math.floor(Math.random() * 30)];
  await message.delete()
  //const deleteCount = parseInt(1, 10);
//	var apagar = message.channel.bulkDelete(deleteCount);
  const embed = new MessageEmbed()
  .setAuthor("Kelle", bot.user.avatarURL())
  .setDescription("**Me chamou? Vim aqui pra quebrar o gelo! 🥶**")
  .addField("Sugiro essa pergunta:",'`' + perguntaGen + '`')
  .setFooter('Espero que isso possa entreter sua call. 😄')
  .setColor('#6e33cc')
  .setTimestamp();
message.author.send(embed).catch((e) => {message.lineReply('Parece que você fechou sua DM. Para receber a mensagem que solicitou, você precisa **abrí-la**.')})
}
}


  
  


exports.help = {
  name: ["gerarassunto", "gerarAssunto"]
}