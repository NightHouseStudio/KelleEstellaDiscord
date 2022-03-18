const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const { stripIndents } = require("common-tags");
const dateFormat = require("dateformat");
const disbut = require('discord-buttons');

exports.run = async (bot, message, args) => {

const embed2 = new MessageEmbed()
.setAuthor('Kelle', bot.user.avatarURL())
 .addFields(
        {
          name: "❓ | Como funciona o comando `steam`?",
          value:
            "Você precisa apenas dizer o usuário do perfil que deseja visualizar.",
          inline: false,
        },
        {
          name: "▶ | Utilização",
          value: "`steam <usuario>`",
          inline: false,
        },
        { name: "💭 | Exemplo", value: "`steam juniodevs`", inline: false },
        {
          name: "‼ | AVISOS",
          value:
            "Somente a foto do perfil é mostrada em perfis privados da Steam.",
          inline: false,
        }
      )
      .setTimestamp()
      .setFooter("Kelle Estella | 2021")
      .setColor("#6e33cc");


        const token = "ED40F612CF033BFE9B195A7D8B265F79"; //I reset mine.
        if(!args[0]) return message.lineReply(embed2);
        const url = `http://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/?key=${token}&vanityurl=${args.join(" ")}`;

        fetch(url).then(res => res.json()).then(body => {
            if(body.response.success === 42) return message.lineReply("❌ | Eu não consegui encontrar nenhum perfil steam com este nome :(");

                const id = body.response.steamid;
                const summaries = `http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${token}&steamids=${id}`;
                const bans = `http://api.steampowered.com/ISteamUser/GetPlayerBans/v1/?key=${token}&steamids=${id}`;
                const state = ["🔴 - Offline", "🟢 - Online", "🟡 - Busy", "⚫ - Away", "💤 - Snooze", "💱 - Looking to trade", "🎮 - Looking to play"];

        fetch(summaries).then(res => res.json()).then(body => {
            if(!body.response) return message.lineReply("❌ | Eu não consegui encontrar nenhum perfil steam com este nome :(");
            const { personaname, avatarfull, realname, personastate, loccountrycode, profileurl, timecreated } = body.response.players[0];

        fetch(bans).then(res => res.json()).then(body => {
            if(!body.players) return message.lineReply("❌ | Eu não consegui encontrar nenhum perfil steam com este nome :(");
            

            if (loccountrycode == undefined) {
              const { NumberOfVACBans, NumberOfGameBans} = body.players[0];
            dataCriacao = dateFormat(timecreated * 1000, "dd/mm/yyyy")
            horaCriacao = dateFormat(timecreated * 1000, "hh:MM TT");
            const embed = new MessageEmbed()
                .setAuthor(`${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setColor('#ffffff')
                .setDescription("Este perfil Steam é **PRIVADO**! Então você não tem acesso à muitas informações. :(")
                .setTimestamp();

                               let button = new disbut.MessageButton()
              .setStyle('url')
              .setURL(profileurl)
              .setLabel("Ver na Steam");

                message.channel.send(embed, button)
            } else {
              const { NumberOfVACBans, NumberOfGameBans} = body.players[0];
            dataCriacao = dateFormat(timecreated * 1000, "dd/mm/yyyy")
            horaCriacao = dateFormat(timecreated * 1000, "hh:MM TT");
            const embed = new MessageEmbed()
                .setAuthor(`${personaname}`, avatarfull)
                .setThumbnail(avatarfull)
                .setColor('#6e33cc')
                .addField('👥 | Nome real', realname || "Unknown", true)
                .addField("🔷 | Status", state[personastate], true)
                .addField("🗺 | País", `:flag_${loccountrycode ? loccountrycode.toLowerCase() : "white"}: - ${loccountrycode}`, true)
                .addField("📆 | Data da criação", `${dataCriacao}, às ${horaCriacao}`, true)
                .addField("❌ | Banimentos", `Vac: ${NumberOfVACBans}, Game: ${NumberOfGameBans}`, true)
                .setTimestamp()
                .setFooter('Kelle Estella | 2021', bot.user.avatarURL())

                               let button = new disbut.MessageButton()
              .setStyle('url')
              .setURL(profileurl)
              .setLabel("Ver na Steam");

                message.channel.send(embed, button)
            }
            })
        })
    })
  }

 exports.help = {
        name: ["steam"],
        description: "Veja as estatisticas dos usuários steam",
        usage: "<user>",
        category: "miscellaneous",
        accessableby: "Members"
    }