const Canvas = require("canvas");
  Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const { registerFont } = require('canvas');
  registerFont('fonts/SF Fedora.ttf', { family: 'SF Fedora' });

exports.run = async (bot,message,args,avatar) => {
  const jojos = {
    kelle: "https://i.ibb.co/SsJm9Wd/kelle-sozinha.png",
    jolyne: "https://i.ibb.co/tcFFWVY/jolyne.png",
    josuke: "https://i.ibb.co/gmk25kf/josuke.png",
    jotaro:"https://i.ibb.co/Yj6DxCk/jotaro.png",
    rohan: "https://i.ibb.co/VCXW9vN/rohan.png",
    kira: "https://i.ibb.co/QYvqMz6/yoshigake.png",
    diego: "https://i.ibb.co/9tRmjf0/diego.png",
    valentine: "https://i.ibb.co/h9G2fVz/Funny-Valentine-ASB.png",
    giorno: "https://i.ibb.co/1MwQyM0/giorno.png",
    gyro: "https://i.ibb.co/NNPch6s/gyro.png",
    avdol: "https://i.ibb.co/jVWzrY4/Avdol.png",
    diavolo: "https://i.ibb.co/YLBR7DG/Diavolo.png",
    dio: "https://i.ibb.co/KDKvksc/Dio.png",
    enrico:  "https://i.ibb.co/3m4P5Mf/enrico.png",
    iggy: "https://i.ibb.co/wKhnwjM/Iggy.png",
    johnny: "https://i.ibb.co/JcR0Xrm/Johnny.png",
    jojolionjosuke: "https://i.ibb.co/vcC6Dn3/jojolionjosuke.png",
    jonathan: "https://i.ibb.co/Qc91sBh/Jonathan.png",
    joseph: "https://i.ibb.co/5Yv7vKR/Joseph.png",
    kakyoin: "https://i.ibb.co/t8mcjZd/Kakyoin.png",
    kakyoin2: "https://i.ibb.co/ZN1rSmC/Kakyoin2.png",
    koichi: "https://i.ibb.co/4g7GNCq/Koichi.png",
    okuyasu: "https://i.ibb.co/McjLznz/Okuyasu.png",
    polnareff: "https://i.ibb.co/28Fh3qN/Polnareff.png",
    william: "https://i.ibb.co/jRN6MRV/Zeppeli.png"
  }
if (!args[0] || !args[1] || args[0] != 'jolyne' && args[0] != 'josuke' && args[0] != 'rohan' && args[0] != 'gyro' && args[0] != 'giorno' && args[0] != 'valentine' && args[0] != 'jotaro' && args[0] != 'kira' && args[0] != 'diego' && args[0] != 'avdol' && args[0] != 'diavolo' && args[0] != 'dio' && args[0] != 'enrico' && args[0] != 'iggy' && args[0] != 'johnny' && args[0] != 'jojolionjosuke' && args[0] != 'jonathan' && args[0] != 'joseph' && args[0] != 'kakyoin' && args[0] != 'kakyoin2' && args[0] != 'koichi' && args[0] != 'okuyasu' && args[0] != 'polnareff' && args[0] != 'william' && args[0] != 'kelle') {
  const help = new MessageEmbed()
  .setAuthor('Kelle', bot.user.avatarURL())
.setTitle('Veja todos os meus comandos clicando aqui!')
.setURL('http://kelle.atwebpages.com/comandos')
.setImage('https://i.ibb.co/kGCpHmd/jojo.png')
.addFields(
        { name: 'Como funciona o `jojo`?', value: 'Você precisa digitar o `k.jojo` junto com o personagem e o texto.'},
        { name: 'Os personagens disponíveis são:', value: '`kelle (eu)`, `jolyne`, `josuke`, `rohan`, `gyro`, `giorno`, `valentine`, `jotaro`, `kira`, `diego`, `avdol`, `diavolo`, `dio`, `enrico`, `iggy`, `johnny`, `jojolionjosuke`, `jonathan`, `joseph`, `kakyoin`, `kakyoin2`, `koichi`, `okuyasu`, `polnareff` e `william`.'},
        { name: 'Exemplo:', value: '`k.jojo jolyne Steel Ball Run`' })
.addField("ㅤ", "**Resultado:**")
.setColor('#6e33cc');
message.channel.send(message.author, help)
} else {
const canvas = Canvas.createCanvas(700, 300);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/ydWDBfv/wzIbOy.png");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '45px SF Fedora';
   ctx.shadowOffsetX = 5;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 2;
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';

	// Actually fill the text with a solid color

  const texto = `${args}`;
  const formatado = texto.replace(/,/g, " ");
  const formatado2 = formatado.replace(args[0], "");

  var words = formatado2.split(' ');
        var line = '';
        var lineHeight = 50;
      var x = (canvas.width) / 2.3;
      var y = (canvas.height) / 3.8 ;

        for(var n = 0; n < words.length; n++) {
          var testLine = line + words[n] + ' ';
          var metrics = ctx.measureText(testLine);

          var testWidth = metrics.width;
          if (testWidth > 390 && n > 0) {
            ctx.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
          }
          else {
            line = testLine;
          }
          ctx.fillText(line, x, y);
        }
	//ctx.fillText(line, 260, 70, 400, 270);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

  if (args[0] == 'kelle') {
    const avatar = await Canvas.loadImage(jojos.kelle);
    	ctx.drawImage(avatar, -240, -50, 600, 600);
  }
  if (args[0] == 'jolyne') {
    const avatar = await Canvas.loadImage(jojos.jolyne);
    	ctx.drawImage(avatar, -20, 25);
  }
  if (args[0] == 'josuke') {
    const avatar = await Canvas.loadImage(jojos.josuke);
    	ctx.drawImage(avatar, -50, 25);
  }
  if (args[0] == 'jotaro') {
    const avatar = await Canvas.loadImage(jojos.jotaro);
    	ctx.drawImage(avatar, -20, 25);
  }
  if (args[0] == 'rohan') {
    const avatar = await Canvas.loadImage(jojos.rohan);
    	ctx.drawImage(avatar, -120, 25, 500, 900);
  }
  if (args[0] == 'kira') {
    const avatar = await Canvas.loadImage(jojos.kira);
    	ctx.drawImage(avatar, -220, 25, 600, 600);
  }
  if (args[0] == 'diego') {
    const avatar = await Canvas.loadImage(jojos.diego);
    	ctx.drawImage(avatar, -175, 25);
  }
  if (args[0] == 'giorno') {
    const avatar = await Canvas.loadImage(jojos.giorno);
    	ctx.drawImage(avatar, -20, 25);
  }
  if (args[0] == 'gyro') {
    const avatar = await Canvas.loadImage(jojos.gyro);
    	ctx.drawImage(avatar, -200, 25, 500, 700);
  }
  if (args[0] == 'valentine') {
    const avatar = await Canvas.loadImage(jojos.valentine);
    	ctx.drawImage(avatar, -100, 25, 500, 700);
  }
  if (args[0] == 'avdol') {
    const avatar = await Canvas.loadImage(jojos.avdol);
    	ctx.drawImage(avatar, -20, -100, 400, 900);
      }
  if (args[0] == 'diavolo') {
    const avatar = await Canvas.loadImage(jojos.diavolo);
    	ctx.drawImage(avatar, -20, 25);
      }
  if (args[0] == 'dio') {
    const avatar = await Canvas.loadImage(jojos.dio);
    	ctx.drawImage(avatar, -90, 25, 400, 700);
      }
  if (args[0] == 'enrico') {
    const avatar = await Canvas.loadImage(jojos.enrico);
    	ctx.drawImage(avatar, -20, 25, 300, 800);
      }
  if (args[0] == 'iggy') {
    const avatar = await Canvas.loadImage(jojos.iggy);
    	ctx.drawImage(avatar, -20, 25, 300, 300);
      }
  if (args[0] == 'johnny') {
    const avatar = await Canvas.loadImage(jojos.johnny);
    	ctx.drawImage(avatar, -20, 25, 400, 500);
      }
  if (args[0] == 'jojolionjosuke') {
    const avatar = await Canvas.loadImage(jojos.jojolionjosuke);
    	ctx.drawImage(avatar, -40, 25);
      }
  if (args[0] == 'jonathan') {
    const avatar = await Canvas.loadImage(jojos.jonathan);
    	ctx.drawImage(avatar, -90, 25, 400, 600);
      }
  if (args[0] == 'joseph') {
    const avatar = await Canvas.loadImage(jojos.joseph);
    	ctx.drawImage(avatar, -200, -10, 500, 400);
      }
  if (args[0] == 'kakyoin') {
    const avatar = await Canvas.loadImage(jojos.kakyoin);
    	ctx.drawImage(avatar, -100, -10, 450, 350);
      }
  if (args[0] == 'kakyoin2') {
    const avatar = await Canvas.loadImage(jojos.kakyoin2);
    	ctx.drawImage(avatar, -60, -50);
      }
  if (args[0] == 'koichi') {
    const avatar = await Canvas.loadImage(jojos.koichi);
    	ctx.drawImage(avatar, -270, 0);
      }
  if (args[0] == 'okuyasu') {
    const avatar = await Canvas.loadImage(jojos.okuyasu);
    	ctx.drawImage(avatar, -100, 25, 500, 500);
      }
  if (args[0] == 'polnareff') {
    const avatar = await Canvas.loadImage(jojos.polnareff);
    	ctx.drawImage(avatar, 0, 25, 300, 400);
      }
  if (args[0] == 'william') {
    const avatar = await Canvas.loadImage(jojos.william);
    	ctx.drawImage(avatar, -100, 25, 500, 700);
      }
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  ctx.fillStyle = '#ffffff';
  ctx.font = '20px SF Fedora';
  	ctx.fillText('Kelle', 640, 300);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'jojo.png');
//  const deleteCount = parseInt(1, 10);
//		var apagar = message.channel.bulkDelete(deleteCount);

	message.lineReply(attachment);
}
}
exports.help = {
  name: ['jojo']
}