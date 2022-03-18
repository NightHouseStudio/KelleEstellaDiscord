const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();
const chrono = require("mugan86-chronometer");
const count = chrono.CountDown;
const convert = require("convert-seconds-to-human");
const tts = require("google-translate-tts");
const fs = require("fs");

//const Numbers = require('number-to-emoji');

exports.run = async (bot, message, args) => {
  var one = message.author.displayAvatarURL();
  var joined = one.replace(".webp", ".png?size=2048");
  if (!args[0] || args[1] || args[2]) {
    const embedk = new MessageEmbed()
      .setAuthor("Kelle", bot.user.avatarURL())
      // .setTitle("Veja todos os meus comandos clicando aqui!")
      // .setURL("http://kelle.atwebpages.com/comandos")
      .addFields(
        {
          name: "❓ | Como funciona o temporizador?",
          value:
            "Simples, você precisa apenas dizer quantos segundos deseja marcar.",
          inline: false,
        },
        {
          name: "▶ | Utilização",
          value: "`temporizador <segundos>`",
          inline: false,
        },
        { name: "💭 | Exemplo", value: "`temporizador 10`", inline: false },
        {
          name: "‼ | AVISOS",
          value:
            "- O tempo máximo é de 300 segundos, que equivale a 5 minutos. \n - Espere o temporizador anterior acabar para iniciar outro.",
          inline: false,
        }
      )
      .setTimestamp()
      .setFooter("Kelle Estella | 2021")
      .setColor("#6e33cc");

    return message.lineReply(embedk);
  } else {
    const str = `${args[0]}`;
    const isOnlyNumbers = /^\d+$/.test(str);

    if (isOnlyNumbers === true) {
      segundos = parseFloat(args[0]);
      const resultCal = convert(segundos, "cal");

      let source = `${resultCal.minutes}:${resultCal.seconds}`;

      // Convert numbers to emoji:
      //let emojiText = Numbers.toEmoji(source);

      segundosFormatado = `${resultCal.minutes} minuto(s) e ${resultCal.seconds} segundo(s)`;

      if (segundos > 300) {
        message.lineReply(
          "Me desculpe, mas devido ao uso excessivo de memória, eu só posso contar até **300 segundos/5 minutos**. 😅"
        );
      } else {
        const descontar = new count(segundos, false);

        // Counter
        const embed = new MessageEmbed()
          .setAuthor(
            `${message.author.username}, deseja iniciar o temporizador?`,
            joined
          )
          .setColor("#7093DB")
          .addField("🏁 - Status", "Iniciando...")
          .addField("⏲ - Tempo definido", segundosFormatado)
          .setFooter(
            "Clique no botão de confirmar abaixo para iniciar o temporizador ou clique no botão de cancelar."
          )
          .setTimestamp();

        const msg = await message.lineReply(embed);
        msg.react("✅");
        msg.react("❌");

        const filter = (reaction, user) => {
          return (
            ["✅", "❌"].includes(reaction.emoji.name) &&
            user.id === message.author.id
          );
        };
        msg
          .awaitReactions(filter, { max: 1, time: 30000, errors: ["time"] })
          .then((collected) => {
            const reaction = collected.first();

            if (reaction.emoji.name === "✅") {
              let counter = descontar.start().subscribe(async (data) => {
                msg.reactions
                  .removeAll()
                  .catch((error) =>
                    console.error("Failed to clear reactions: ", error)
                  );
                tempoDecorrido = data.replace("0d 0h ", "");
                tempoDecorrido2 = tempoDecorrido.replace("s", " segundo(s)");
                tempoDecorrido3 = tempoDecorrido2.replace("m", " minuto(s) e ");

                const embed2 = new MessageEmbed()
                  .setAuthor(
                    `Temporizador criado por ${message.author.username}`,
                    joined
                  )
                  .setColor("#FF0000")
                  .addField("🔄 - Status", "Executando...")
                  .addField("⏲ - Tempo definido", segundosFormatado)
                  .addField("⏳ - Tempo decorrido", tempoDecorrido3)
                  .setTimestamp()
                  .setFooter(
                    "Obs: A partir de 1 minuto, este temporizador pode ficar dessincronizado. Mas fique tranquilo, pois assim que o tempo for atingido, você receberá uma mensagem."
                  );

                msg.edit(embed2);

                if (data === "FINISH") {
                  counter.unsubscribe();
                  // CommonJS

                  //var voiceChannel = message.member.voice.channel;

                  //  if (message.member.voice.channel) {

                  // const saveFile = async () => {
                  //     const buffer = await tts.synthesize({
                  //         text: `O temporizador de ${segundos} segundos, criado por ${message.author.username}, foi concluído!`,
                  //         voice: "pt",
                  //         slow: false // optional
                  //     });
                  //   geradorNumero = Math.random();
                  //   nomeArquivo = `vozTemp${geradorNumero}.ogg`;
                  //     fs.writeFileSync(nomeArquivo, buffer);

                  //       voiceChannel.join().then(connection =>{
                  //    const alarme = connection.play("./bellAlert.ogg", { volume: 0.5 })

                  //  alarme.on("finish", () => {
                  //     const dispatcher = connection.play(`./${nomeArquivo}`)

                  //       dispatcher.on("finish", () => {
                  //     setTimeout(() => {
                  //   voiceChannel.leave();

                  //   fs.unlink(`./${nomeArquivo}`, function(err) {
                  // if (err) {
                  //  throw err
                  // }
                  // else {
                  // console.log("Áudio deletado com sucesso!") // Avisando no console que a imagem foi deletada do diretório
                  //    }
                  // })
                  // }, 5000)

                  // });

                  //  })

                  // }).catch(err => console.log(err));

                  // }
                  // saveFile();
                  //  } else {
                  //    console.log("n ta no canal de voz")
                  //  }

                  const embedf = new MessageEmbed()
                    .setAuthor(
                      `Temporizador criado por ${message.author.username}`,
                      joined
                    )
                    .setColor("	#00FF00")
                    .addField("✅ - Status", "Finalizado")
                    .setThumbnail(
                      "https://i.ibb.co/Tqb75NG/Alarm-Clock-GIF-Animation-High-Res.gif"
                    )
                    .addField("⏲ - Tempo definido", segundosFormatado)
                    .addField("⏳ - Tempo decorrido", segundosFormatado)
                    .setTimestamp();

                  msg.edit(embedf);

                  message.lineReply(
                    "O temporizador de " +
                      segundosFormatado +
                      " foi concluído com sucesso! ⌛✅"
                  );
                }
              });
            }
            if (reaction.emoji.name === "❌") {
              msg.reactions
                .removeAll()
                .catch((error) =>
                  console.error("Failed to clear reactions: ", error)
                );
              const embedfs = new MessageEmbed()
                .setAuthor(`A criação do temporizador foi cancelada!`, joined)
                .setColor("#FF0000")
                .addField("❌ - Status", "Cancelado")
                .addField("⏲ - Tempo definido", segundosFormatado)
                .addField("👤 - Criador", message.author.username)
                .setTimestamp();

              msg.edit(embedfs);
            }
          });
      }
    } else {
      const embedk = new MessageEmbed()
        .setAuthor("Kelle", bot.user.avatarURL())
        .setTitle("Veja todos os meus comandos clicando aqui!")
        .setURL("http://kelle.atwebpages.com/comandos")
        .addFields(
          {
            name: "❓ | Como funciona o temporizador?",
            value:
              "Simples, você precisa apenas dizer quantos segundos deseja marcar.",
            inline: false,
          },
          {
            name: "▶ | Utilização",
            value: "`temporizador <segundos>`",
            inline: false,
          },
          { name: "💭 | Exemplo", value: "`temporizador 10`", inline: false },
          {
            name: "‼ | AVISOS",
            value:
              "- O tempo máximo é de 300 segundos, que equivale a 5 minutos. \n - Espere o temporizador anterior acabar para iniciar outro.",
            inline: false,
          }
        )
        .setTimestamp()
        .setFooter("Kelle Estella | 2021")
        .setColor("#6e33cc");

      message.lineReply(embedk);
    }
  }
};
// With clock format

exports.help = {
  name: ["temporizador", "timer"],
};
