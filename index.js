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


bot.on("ready", async () => {
  const data = await prefix.countDocuments({});
  cluster = ` | Cluster 1 [${data}]`;


  console.log("Estou pronto para ser usado! (^-^)");

      var servers = bot.guilds.cache.size;
      bot.user.setActivity(`📶 ${servers} servidores` + cluster, {
        type: "PLAYING",
      });


});

bot.on("message", async(message) => {
  
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

    //if (
    //  message.content.includes("@here") ||
    //  message.content.includes("@everyone")
    //)
    //  return false;
    //if (message.mentions.has(bot.user)) {
    //  message.lineReply(
    //    "Oi! Prazer em conhecê-lo <@" +
    //      message.author +
    //      ">. Meu nome é Kelle Estella. \nMeu prefixo neste servidor é `" +
    //      prefix +
    //      "`. \nEnvie `" +
    //      prefix +
    //      "help` para ver o que eu posso fazer."
    //  );
    //}

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
