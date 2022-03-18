//const mongo = require('../mongo')  
const { languages } = require('../lang.json')

exports.help = {
	name: ["setlang", "setlanguage"],
  minArgs: 1,
  maxArgs: 1,
  expectedArgs: '<language>',
  permissions: 'ADMINISTRATOR',
  callback: (message, arguments) => {
    const { guild } = message;

    const targetLanguage = arguments[0].toLowerCase()

    if (!languages.includes(targetLanguage)) {
      messsage.reply("**Língua não suportada! / Language not supported! \nAs línguas suportadas são: `pt` e `en`. \nThe supported languages is: `pt` and `en`.")
      return
    }


  }
}