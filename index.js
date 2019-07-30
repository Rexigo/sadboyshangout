const Discord = require('discord.js');
const bot  = new Discord.Client();

const token = 'NjA1NDUyNjQwMDQxNTY2MjMz.XT88Cw.AND51-mUWOyt5k-U7nTcaNztDh4';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.login(token);

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome to The Sad Boys Hangout!, ${member}, make sure to read the rules and have a great time!`)
});