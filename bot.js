const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Mjk0Nzk4ODAxNDYwMjY0OTYw.DLGr1A.ia3byLl5gSXZ8d4yn3Juywe50bg);
