const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("<h1>Hello World!</h1>"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

// codigo do bot
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fs = require("fs");
const mongoose = require("mongoose");
const prefix = require("./models/prefix");
const https = require("https");
const mongooseServer = process.env['mongooseServer'];

mongoose.connect(
  mongooseServer,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
const token = process.env['DISCORD_TOKEN']
require("discord-reply");
require("discord.js-prompts");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const disbut = require("discord-buttons");
disbut(bot);

fs.readdir("./comandos/", (err, files) => {
  if (err) console.error(err);

  let arquivojs = files.filter((f) => f.split(".").pop() == "js");

  arquivojs.forEach((f) => {
    let props = require(`./comandos/${f}`);
    console.log(`Comando ${f} carregado com sucesso.`);
    props.help.name.forEach((e) => bot.commands.set(e, props));
  });
});

bot.on("clickButton", async (button) => {
  // console.log(button.clicker.user.tag);
  // se escolher pedra
  if (button.id === "pedra") {
    const objetos = ["pedra", "papel", "tesoura"];

    sorteiaObjeto = objetos[Math.floor(Math.random() * 3)];

    if (sorteiaObjeto === "pedra") {
      let btn = new disbut.MessageButton()
        .setStyle("blurple")
        .setLabel("Pedra 🪨")
        .setID("pedra")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**EMPATE!** Ambos escolhemos **pedra 🪨**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "papel") {
      let btn = new disbut.MessageButton()
        .setStyle("blurple")
        .setLabel("Pedra 🪨")
        .setID("pedra")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você perdeu!** Você escolheu **pedra 🪨** e eu escolhi **papel 📃**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "tesoura") {
      let btn = new disbut.MessageButton()
        .setStyle("blurple")
        .setLabel("Pedra 🪨")
        .setID("pedra")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você ganhou!** Você escolheu **pedra 🪨** e eu escolhi **tesoura ✂**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }
  }

  // se escolher papel
  if (button.id === "papel") {
    const objetos = ["pedra", "papel", "tesoura"];

    sorteiaObjeto = objetos[Math.floor(Math.random() * 3)];

    if (sorteiaObjeto === "pedra") {
      let btn = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("Papel 📃")
        .setID("papel")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você ganhou!** Você escolheu **papel 📃** e eu escolhi **pedra 🪨**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "papel") {
      let btn = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("Papel 📃")
        .setID("papel")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**EMPATE!** Ambos escolhemos **papel 📃**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "tesoura") {
      let btn = new disbut.MessageButton()
        .setStyle("green")
        .setLabel("Papel 📃")
        .setID("papel")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você perdeu!** Você escolheu **papel 📃** e eu escolhi **tesoura ✂**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }
  }

  // se escolher tesoura
  if (button.id === "tesoura") {
    const objetos = ["pedra", "papel", "tesoura"];

    sorteiaObjeto = objetos[Math.floor(Math.random() * 3)];

    if (sorteiaObjeto === "pedra") {
      let btn = new disbut.MessageButton()
        .setStyle("red")
        .setLabel("Tesoura ✂")
        .setID("tesoura")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você perdeu!** Você escolheu **tesoura ✂** e eu escolhi **pedra 🪨**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "papel") {
      let btn = new disbut.MessageButton()
        .setStyle("red")
        .setLabel("Tesoura ✂")
        .setID("tesoura")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**Você ganhou!** Você escolheu **tesoura ✂** e eu escolhi **papel 📃**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }

    if (sorteiaObjeto === "tesoura") {
      let btn = new disbut.MessageButton()
        .setStyle("red")
        .setLabel("Tesoura ✂")
        .setID("tesoura")
        .setDisabled();

      //✂ 🪨 📃
      await button.reply.defer();
      return button.message.edit(
        "**EMPATE!** Ambos escolhemos **tesoura ✂**.",
        btn
      );

      button.channel.send(button.clicker.user.tag.toLowerCase());
    }
  }
});

bot.on("clickMenu", async (menu) => {
  if (menu.values[0] == "menuid") {
    await menu.channel.send("ok");
  }
});

bot.on("ready", async () => {
  const data = await prefix.countDocuments({});
  cluster = ` | Cluster 1 [${data}]`;

  // console.log(data)
  // 	const options = {
  //   hostname: 'discordbotlist.com',
  //   method: 'POST',
  //   headers: {
  //     'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0IjoxLCJpZCI6IjM2NTk3NTY1NTYwODc0NTk4NSIsImlhdCI6MTU5MDI3NjEwOH0.UESu-Jm9kA_FCpRPSMjVwMGYJmLPxg44g_I7eDz5ZmQ',
  //     'Content-Type': 'application/json'
  //   },
  //   body: '{ "guilds": "100" }'
  // }

  // const req = https.request(options, (res) => {
  //   console.log(`STATUS: ${res.statusCode}`);
  //   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
  //   res.setEncoding('utf8');
  //   res.on('data', (chunk) => {
  //     console.log(`BODY: ${chunk}`);
  //   });
  // });

  console.log("Estou pronto para ser usado! (^-^)");
  let activNum = 0;
  setInterval(function () {
    if (activNum === 0) {
      bot.user.setActivity(`🌙 Me mencione para ver sobre.` + cluster, {
        type: "WATCHING",
      });

      activNum = 1;
    } else if (activNum === 1) {
      var servers = bot.guilds.cache.size;
      bot.user.setActivity(`📶 ${servers} servidores` + cluster, {
        type: "PLAYING",
      });

      activNum = 2;
    } else if (activNum == 2) {
      bot.user.setActivity(
        "🐤 Me siga no Twitter! @BotKelle. Lá eu posto novidades e informo várias coisas." +
          cluster,
        { type: "LISTENING" }
      );

      activNum = 0;
    }
  }, 30 * 1000);

  //

  //

  bot.api
    .applications(bot.user.id)
    .guilds("777005017474793472")
    .commands.post({
      data: {
        name: "ping",
        description: "〚🚩 Básicos〛 Checar a sua latência.",
        // possible options here e.g. options: [{...}]
      },
    });

  //const commands = await bot.api.applications(bot.user.id).guilds("777005017474793472").commands.get()

  //console.log(commands)

  //await bot.api.applications(bot.user.id).guilds("777005017474793472").commands("839549623437361193").delete();

  bot.ws.on("INTERACTION_CREATE", async (interaction) => {
    const command = interaction.data.name.toLowerCase();
    const args = interaction.data.options;

    if (command === "ping") {
      // here you could do anything. in this sample
      // i reply with an api interaction

      bot.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
          type: 4,
          data: {
            content: `🏓 Pong! **2 ms.**`,
          },
        },
      });
    }
  });

  //
  //
  //
});
// Create an event listener for messages
bot.on("message", async (message) => {
  if (message.guild.me.nickname === "puta") {
    if (!message.guild.me.hasPermission("MANAGE_NICKNAMES")) {
      message.channel.send("Não tenho permissão pra mudar apelidos.");
    } else {
      message.lineReply(
        "**Alguém colocou um apelido feio em mim. Posso até não ser humana mas também tenho sentimentos, atitudes assim me deixam magoada. Acabei de resetar meu nickname. 🌙<:kelle_cry:746498437809307690>**"
      );
      message.guild.me.setNickname("Kelle");
    }
  }
  if (message.author.bot) return;

  const data = await prefix.findOne({
    GuildID: message.guild.id,
  });

  const messageArray = message.content.split(" ");
  const cmd = messageArray[0];
  const args = messageArray.slice(1);

  if (data) {
    const prefix = data.Prefix;

    if (message.author.bot) return false;

    if (
      message.content.includes("@here") ||
      message.content.includes("@everyone")
    )
      return false;
    if (message.mentions.has(bot.user)) {
      message.lineReply(
        "Oi! Prazer em conhecê-lo <@" +
          message.author +
          ">. Meu nome é Kelle Estella. \nMeu prefixo neste servidor é `" +
          prefix +
          "`. \nEnvie `" +
          prefix +
          "help` para ver o que eu posso fazer."
      );
    }

    if (!message.content.startsWith(prefix)) return;
    if (message.content === prefix) {
      message.lineReply("Digite `" + prefix + "help` para ver os comandos.");
    }
    const commandFile =
      bot.commands.get(cmd.slice(prefix.length)) ||
      bot.commands.get(bot.aliases.get(cmd.slice(prefix)));
    commandFile.run(bot, message, args);
  } else if (!data) {
    let prefix = "k.";
    if (message.author.bot) return false;

    if (
      message.content.includes("@here") ||
      message.content.includes("@everyone")
    )
      return false;
    if (message.mentions.has(bot.user)) {
      message.lineReply(
        "Oi! Prazer em conhecê-lo <@" +
          message.author +
          ">. Meu nome é Kelle Estella. \nMeu prefixo neste servidor é `" +
          prefix +
          "`. \nEnvie `" +
          prefix +
          "help` para ver o que eu posso fazer."
      );
    }
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    if (!message.content.startsWith(prefix)) return;
    if (message.content === prefix) {
      message.lineReply("Digite `k.help` para ver os comandos.");
    }

    const commandFile =
      bot.commands.get(cmd.slice(prefix.length)) ||
      bot.commands.get(bot.aliases.get(cmd.slice(prefix)));

    if (message.channel.type === "dm") return;

    if (!message.guild) return;
  }
});

bot.login(token);