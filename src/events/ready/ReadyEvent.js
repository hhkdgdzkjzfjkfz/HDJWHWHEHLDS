const BaseEvent = require('../../utils/structures/BaseEvent');
const { joinVoiceChannel } = require('@discordjs/voice');
const { Client } = require('discord.js');
module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }

async run (client) {
    
  client.user.setPresence({
  activities: [{ name: `𝗠𝗮𝗱𝗲 𝗜𝗻 𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 ..` , type:1, url: "https://www.twitch.tv/gulf-dream" }],
  status: 'idle',
});
    console.log(client.user.tag + ' has logged in.');
let names = [
"مـسـاعـدة﹣",
"تـكـت﹣",
"تـفـعـيـل﹣",
 "شـكـاوي﹣","التذكرة-رقم","قـيـادة﹣",
  "عـسـكـر﹣"
]
let guild = client.guilds.cache.get('1144928711318179860')
/*
guild.channels.cache.forEach((channel) => {
    if (names.some(name => channel.name.startsWith(name))) {
      channel.delete()
        .then(() => console.log(`Deleted channel: ${channel.name}`))
        .catch(console.error);
    }
});*/
}}