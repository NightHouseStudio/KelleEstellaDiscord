const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const bot = new Discord.Client();

exports.run = (bot, message, args) => {
  if (!args[0] || !args.includes("//")) {
    message.reply("sem chance, prç.");
  } else {
    const textos = args;
    const texto = textos.join(" ");

    const textoF = texto.split("//");

    const num = Math.floor(Math.random() * 2);

    const falas = [
      "Sinceramente, eu prefiro:",
      "Na minha opinião, eu gostei de:",
      "Eu gostei de:",
      "Prefiro:",
    ];

    const emojis = ["🤐", "😜", "🤭", "😬", "🤗", "🤩"];

    const numFalas = Math.floor(Math.random() * 4);
    const numEmojis = Math.floor(Math.random() * 6);

    message.reply(
      "o que eu prefiro? 🤔\n" +
        `${falas[numFalas]} **${textoF[num]}** ${emojis[numEmojis]}`
    );
  }
};

exports.help = {
  name: ["ovp"],
};
