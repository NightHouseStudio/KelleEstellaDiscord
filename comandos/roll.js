const Canvas = require("canvas");
  Discord = require("discord.js");
  const { MessageEmbed } = require("discord.js");
  const { registerFont } = require('canvas');
  registerFont('fonts/medieval-normal.ttf', { family: 'Medieval' });

exports.run = async (bot,message,args,avatar) => {
  
if (!args[0]) {
  const help = new MessageEmbed()
  .setAuthor('Kelle', bot.user.avatarURL())
.setTitle('Veja todos os meus comandos clicando aqui!')
.setURL('http://kelle.atwebpages.com/comandos')
.addFields(
        { name: '<a:roll:786648195316580432> | Como funciona o `roll`?', value: 'Você precisa digitar o `k.roll` junto com o tipo de dado.'},
        { name: '<a:roll:786648195316580432> | Os tipo de dados disponíveis são:', value: '`d4`, `d6`, `d8`, `d10`, `d12` e `d20`.'},
        { name: 'Exemplo:', value: '`k.roll d20`' })
.setColor('#6e33cc');
message.lineReply(help)
}
 if(args[0] === 'd8') {
const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in

	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 8 + 1);
const x = canvas.width / 2;
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  ctx.textAlign = "center";
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d8...**');
  setTimeout(() => {
    msg.delete();
      message.lineReply(attachment); 
}, 4000);    

}

if (args[0] === "d4") {
  const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
  ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 4 + 1);
const x = canvas.width / 2;
ctx.textAlign = "center";
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d4...**');
    setTimeout(() => {
      msg.delete();
        message.lineReply(attachment); 
  }, 4000);
}
if (args[0] === 'd6') {
  const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
        ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 6 + 1);
const x = canvas.width / 2;
ctx.textAlign = "center";
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d6...**');
  setTimeout(() => {
    msg.delete();
      message.lineReply(attachment); 
}, 4000);
}
 
 if (args[0] === 'd10') {
   const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
        ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 10 + 1);
const x = canvas.width / 2;
ctx.textAlign = "center";
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d10...**');
  setTimeout(() => {
    msg.delete();
      message.lineReply(attachment); 
}, 4000);
 }
 
 if (args[0] === "d12") {
     const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
        ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 12 + 1);
const x = canvas.width / 2;
ctx.textAlign = "center";
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d12...**');
  setTimeout(() => {
    msg.delete();
      message.lineReply(attachment); 
}, 4000);
 }

 if (args[0] === 'd20') {
     const canvas = Canvas.createCanvas(500, 500);
	const ctx = canvas.getContext('2d');
	const background = await Canvas.loadImage("https://i.ibb.co/XW9QNz0/fd2d0a979c0db7d1d495a14ea9da8437.jpg");
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
  
  // Select the font size and type from one of the natively available fonts
   ctx.font = '50px Medieval';
 
	// Select the style that will be used to fill the text in
	ctx.fillStyle = '#ffffff';
        ctx.shadowOffsetX = 7;
   ctx.shadowOffsetY = 0;
  ctx.shadowColor = '#000000';
  ctx.shadowBlur = 4;

	// Actually fill the text with a solid color


  

    const avatar = await Canvas.loadImage('https://i.ibb.co/R3b2JBK/Pngtree-vector-hand-painted-golden-shield-2917590.png');
    	ctx.drawImage(avatar, -70, -60);
      
      	ctx.fillText("Você tirou...", 160, 200);
	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);
  
	// Move the image downwards vertically and constrain its height to 200, so it's a square
//const watermark = await Canvas.loadImage("https://i.ibb.co/wwtjXjc/20201026-084409.png");
  //  	ctx.drawImage(watermark, 650, 250, 50, 50);
  var numero = Math.floor(Math.random() * 20 + 1);
const x = canvas.width / 2;
ctx.textAlign = "center";
     ctx.fillStyle = '#ffffff';
  ctx.font = '200px Medieval';
  	ctx.fillText(`${numero}`, x, 350);  

    	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'roll.png');

 const msg = await message.lineReply('**<a:roll:786648195316580432> | Rolando dado do tipo d20...**');
  setTimeout(() => {
    msg.delete();
      message.lineReply(attachment); 
}, 4000);
 }

}
exports.help = {
  name: ['roll', "rolar"]
}