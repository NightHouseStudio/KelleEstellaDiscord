	const Discord = require('discord.js');
	const { MessageEmbed } = require('discord.js');
  const prompter = require('discordjs-prompter');

	exports.run = (bot,message,args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) {
  message.lineReply('você precisa ser administrador para criar uma votação. 🤷🏻‍♂️')
  } else {
    const titleEmbed = new MessageEmbed()
    .setAuthor("Kelle", bot.user.avatarURL())
    .setTitle("♦ - Título da votação")
    .setColor(0x00AE86)
    .setTimestamp()
    .addField("🚩 - STEP 1/6","Digite um título para a votação que deseja criar.")
    .setFooter("Criando uma votação")
    prompter
      .message(message.channel, {
        question: titleEmbed,
        userId: message.author.id,
        max: 1,
        timeout: 60 * 1000,
      })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
        }
        // Gets the first message in the collection
        const responseTitle = responses.first();

        // Respond
         const numberOptionsEmbed = new MessageEmbed()
    .setAuthor("Kelle", bot.user.avatarURL())
    .setTitle("📊 - Quantidade de opções")
    .setColor(0x00AE86)
    .setTimestamp()
          .addField("♦ - Título definido", "`" + `${responseTitle}` + "`")
    .addField("🚩 - STEP 2/6", "Digite quantas opções você quer em sua votação. (máximo 2)")
    .setFooter("Criando uma votação")
    prompter
      .message(message.channel, {
        question: numberOptionsEmbed,
        userId: message.author.id,
        max: 1,
        timeout: 60 * 1000,
      })
      .then(responses => {
        // If no responses, the time ran out
        if (!responses.size) {
          return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
        }
        // Gets the first message in the collection
        const responseNumberOptions = responses.first();

        // Respond   
        numeroDeOpcoes = parseFloat(responseNumberOptions);
        const isOnlyNumbers = /^\d+$/.test(`${responseNumberOptions}`);

        if (numeroDeOpcoes < 2 || numeroDeOpcoes > 2 || isOnlyNumbers === false) {
            message.lineReply("❌ | Desculpe, mas o máximo de opções suportadas são 2. (Ainda estou aprendendo a fazer novas opções).")
        }

        
        if (numeroDeOpcoes == 2) {
         
          const optionsEmbed = new MessageEmbed()
          .setAuthor("Kelle", bot.user.avatarURL())
          .setTitle("1️⃣ - Texto da primeira opção")
          .setColor(0x00AE86)
          .setTimestamp()
          .addField("♦ - Título definido", "`" + `${responseTitle}` + "`")
          .addField("📊 - Número de opções definido", "`" + numeroDeOpcoes + "`")
          .addField("🚩 - STEP 3/6", "Digite o texto da 1ª primeira opção.")
          .setFooter("Criando uma votação")
          prompter
            .message(message.channel, {
              question: optionsEmbed,
              userId: message.author.id,
              max: 1,
              timeout: 60 * 1000,
            })
            .then(responses => {
              // If no responses, the time ran out
              if (!responses.size) {
                return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
              }
              // Gets the first message in the collection
              const responseFirstOption = responses.first();

              // Respond
              const optionsEmbed2 = new MessageEmbed()
          .setAuthor("Kelle", bot.user.avatarURL())
          .setTitle("2️⃣ - Texto da segunda opção")
          .setColor(0x00AE86)
          .setTimestamp()
          .addField("♦ - Título definido", "`" + `${responseTitle}` + "`")
          .addField("📊 - Número de opções definido", "`" + numeroDeOpcoes + "`")
          .addField("1️⃣ - Primeira opção", "`" + `${responseFirstOption}` + "`")
          .addField("🚩 - STEP 4/6", "Digite o texto da 2ª opção.")
          .setFooter("Criando uma votação")
          prompter
            .message(message.channel, {
              question: optionsEmbed2,
              userId: message.author.id,
              max: 1,
              timeout: 60 * 1000,
            })
            .then(responses => {
              // If no responses, the time ran out
              if (!responses.size) {
                return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
              }
              // Gets the first message in the collection
              const responseSecondOption = responses.first();

              // Respond
              const channelEmbed = new MessageEmbed()
          .setAuthor("Kelle", bot.user.avatarURL())
          .setTitle("📣 - Canal")
          .setColor(0x00AE86)
          .setTimestamp()
          .addField("♦ - Título definido", "`" + `${responseTitle}` + "`")
          .addField("📊 - Número de opções definido", "`" + numeroDeOpcoes + "`")
          .addField("1️⃣ - Primeira opção", "`" + `${responseFirstOption}` + "`")
          .addField("2️⃣ - Segunda opção", "`" + `${responseSecondOption}` + "`")
          .addField("🚩 - STEP 5/6", "Em qual canal você quer criar essa votação? \n Obs: Digite `#` e mencione o canal.")
          .setFooter("Criando uma votação")
          prompter
            .message(message.channel, {
              question: channelEmbed,
              userId: message.author.id,
              max: 1,
              timeout: 60 * 1000,
            })
            .then(responses => {
              // If no responses, the time ran out
              if (!responses.size) {
                return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
              }
              // Gets the first message in the collection
              const responseChannel = responses.first();

              const idCanal = `${responseChannel}`
              idCanalFormatado = idCanal.replace('<#', "")
              idCanalFormatado2 = idCanalFormatado.replace(">", "")

              const isOnlyNumbers = /^\d+$/.test(idCanalFormatado2);

              if (isOnlyNumbers === false || !idCanal.includes("<#") && !idCanal.includes(">")) {
                message.lineReply("❌ | Erro! Canal digitado incorretamente, não existe ou eu não tenho permissão para visualizá-lo.")
              } else {

                  
              const confirmationEmbed = new MessageEmbed()
          .setAuthor("Kelle", bot.user.avatarURL())
          .setTitle("❓ - Confirmar a criação")
          .setColor(0x00AE86)
          .setTimestamp()
          .addField("♦ - Título definido", "`" + `${responseTitle}` + "`")
          .addField("📊 - Número de opções definido", "`" + numeroDeOpcoes + "`")
          .addField("1️⃣ - Primeira opção", "`" + `${responseFirstOption}` + "`")
          .addField("2️⃣ - Segunda opção", "`" + `${responseSecondOption}` + "`")
          .addField("📣 - Canal definido", `${responseChannel}`)
          .addField("🚩 - STEP 6/6", "Confirmar a criação da votação? (sim/não)")
          .setFooter("Criando uma votação")
          prompter
            .message(message.channel, {
              question: confirmationEmbed,
              userId: message.author.id,
              max: 1,
              timeout: 60 * 1000,
            })
            .then(async responses => {
              // If no responses, the time ran out
              if (!responses.size) {
                return message.lineReply(`❌ | Criação da votação cancelada porque você demorou responder. :(`);
              }
              // Gets the first message in the collection
              const responseConfirmation = responses.first();
              const confirmacao = `${responseConfirmation}`
              // Respond
              if (confirmacao == "sim" || confirmacao == "Sim") {

          
                  let channel = message.guild.channels.cache.get(idCanalFormatado2)
              var one = message.author.displayAvatarURL();
              var joined = one.replace(".webp", ".png?size=2048");
                  const votacao = new MessageEmbed()
                  .setAuthor(`Votação criada por ${message.author.username}`, joined)
                  .setTitle(`${responseTitle}`)
                  .addField(`1️⃣ - Opção 1`, `${responseFirstOption}`)
                  .addField(`2️⃣ - Opção 2`, `${responseSecondOption}`)
                  .setTimestamp()
                  .setFooter("Clique na reação referente à sua escolha.")
                  .setColor(0x00AE86)

                  message.lineReply(`✅ | Votação criada com sucesso! \nConfira o canal ${responseChannel}.`)
                  const msg = await channel.send(votacao).then( msg => {
                  msg.react('1️⃣')
                  msg.react('2️⃣')
                  }).catch(err => message.lineReply("❌ | Não consegui criar a votação no canal citado. Verifique se eu tenho permissão de mandar mensagem ou reagir lá."))

              }
              if (confirmacao == "não" || confirmacao == "Não" || confirmacao == "nao" || confirmacao == "Nao") {
                message.lineReply("❌ | Criação da votação cancelada pelo usuário.")
              }
              
            })

              }


            })
            })
        });
       
        }
         });
      });
    
    
    
    
    // const titleEmbed = new MessageEmbed()
    // .setAuthor("Kelle", bot.user.avatarURL())
    // .setTitle("📊 - Título da votação")
    // .setColor(0x00AE86)
    // .setTimestamp()
    // .setDescription("Digite um título para a votação que deseja criar. \n\n Lembre-se: para cancelar a criação da votação, é só mandar `cancelar`.")
    // .setFooter("Criando uma votação")

    // message.channel.send(titleEmbed)


    // if (message.content === "cancelar") {
    //   const cancel = new MessageEmbed()
    // .setAuthor("Kelle", bot.user.avatarURL())
    // .setTitle("📊 - Votação cancelada")
    // .setColor(0x00AE86)
    // .setTimestamp()
    // .setDescription("Criação de votação cancelada.")
    // .setFooter("Criando uma votação")

    // message.channel.send(cancel)
    // }
}





// 		if(!message.member.hasPermission("ADMINISTRATOR")) return message.lineReply('você precisa ser administrador para criar uma votação. 🤷🏻‍♂️');
// 		if (args.length === 0 || message.content ===`.votacaosimples ${args[0]}` || message.content ===`.votacaosimples ${args[0]} ${args[1]}` || message.content === `.votacaosimples ${args[0]} ${args[1]} ${args[2]} ${args[3]} ${args[4]} ${args[5]} ${args[6]} ${args[7]}`) return message.lineReply("utilize **.votacaosimples <títuloDaVotação> <opção1> <opção2>** \n Use (-) ou (_) para separar as palavras.");

// 	if(args[1] === args[2]) {
// 		message.lineReply('você não pode por duas opções iguais! 🤷🏻‍♂️')
// 	}else {
// 		titulo = args[0].replace(/-/g, " ");
// 		opcao1 = args[1].replace(/-/g, " ");
// 		opcao2 = args[2].replace(/-/g, " ");
// 		const votacaosimples = new MessageEmbed()
// 		.setTitle(`Votação criada por ${message.author.username}`)
// 		.setColor('#77dd77')
// 		.setDescription(titulo)
// 		.addField('Opção 1⃣', opcao1)
// 		.addField('Opção 2⃣', opcao2)
// 		.setFooter('Vote clicando no emoji referente a opção.');
// 		message.lineReply(votacaosimples).then(embedMessage =>{
// 			embedMessage.react('1⃣');
// 			embedMessage.react('2⃣');
// 		});
// 	//	message.lineReply('@everyone')
// 	}
  
//   if (message.guild.me.nickname === 'puta') {
//     if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) { message.lineReply('Não tenho permissão pra mudar apelidos.')
// } else {
//     message.lineReply('Posso até não ser humana mas também tenho sentimentos, atitudes assim me deixam magoada. Acabei de resetar meu nickname.');
//     message.lineReply('<:kelle_cry:746498437809307690>')
//     message.guild.me.setNickname('Kelle');
// }
//   }

	}

exports.help = {
	name: ["poll", "votacao", "enquete"]
}