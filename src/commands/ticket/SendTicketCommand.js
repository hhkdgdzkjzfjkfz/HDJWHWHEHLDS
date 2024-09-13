const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket', 'ticket', []);
  }
  
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('opens')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تـذكـرة - تـفـعـيـل`)
       
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('#6e4b00')
      .setTitle("**𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . 𝗧𝗶𝗰𝗸𝗲𝘁**")
      .setDescription(`__**
<a:00:1176226411774750822> — مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـتـفـعـيـل .

<:gulF7:1241727792257826877> — لـلـتـفـعـيـل فـي قـولـف دريـم الـرجـاء الـنـقـر عـلـى ( تـذكـرة تـفـعـيـل ) .

<a:736257973906571306:1176226228592713929> — ويـرجـى الالـتـزام بالانـظـمـة الـمـوضـحـة ادنـاه .

1 — احـتـرام الاداري .
2 — عـدم اكـثـار مـنـشـن
3 — عـدم الـتـأخـر فـي الـرد

<a:93DF6B7880944A298485A6FC945B707D:1176249637234016286> — نـرجـو الالـتـزام بالانـظـمـة وعـدم مـخـالـفـتـهـا .

( مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق )**__`)
.setImage("https://cdn.discordapp.com/attachments/1176357444180525217/1257845419866718288/73e4e06c46719a31.png?ex=6685e355&is=668491d5&hm=8b296708ee7409a9e36c9a4a59798bbf3cb7ca7e9ff9fdd0eae3a15369b6e8c5&")

    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}