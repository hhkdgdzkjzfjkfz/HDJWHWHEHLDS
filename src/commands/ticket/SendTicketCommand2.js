const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket2', 'ticket', []);
  }
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('opens2')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تـذكـرة - الـشـكـاوي - الـعـامـة`)

      )
    let embed = new Discord.EmbedBuilder()
      .setColor('#6e4b00')
      .setTitle("**𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . 𝗧𝗶𝗰𝗸𝗲𝘁**")
      .setDescription(`__**قـسـم الـشـكـاوي الـعـامـة .

<a:00:1176226411774750822> — مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـشـكـاوي الـعـامـة .

<a:pp887:1176253226723590144> — لـرفـع شـكـوى فـي قـولـف دريـم الـرجـاء الـنـقـر عـلـى ( تـذكـرة الـشـكـاوي الـعـامـة ) .

<a:736257973906571306:1176226228592713929> — ويـرجـى الالـتـزام بالانـظـمـة الـمـوضـحـة ادنـاه .

1 — احـتـرام الاداري .
2 — شـرح مـشـكـلـتـك بـالـتـفـصـيـل .
3 — عـدم اكـثـار مـنـشـن .
4 — تـوفـر الأدلـة الـكـافـيـة وإرفـاقـهـا بـالتـكـت .

<a:93DF6B7880944A298485A6FC945B707D:1176249637234016286> — نـرجـو الالـتـزام بالانـظـمـة وعـدم مـخـالـفـتـهـا .

( مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق )**__`)
.setImage("https://cdn.discordapp.com/attachments/1176357444180525217/1257849014041186404/2.png?ex=6685e6ae&is=6684952e&hm=a178e8e49f0c5f4991b29de223495d0407566565a6d6e383ed68cac6388ec7cd&")


    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}