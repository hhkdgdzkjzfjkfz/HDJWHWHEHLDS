const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket5', 'ticket', []);
  }
  
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('opens5')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تـذكـرة - قـسـم - الـمـسـاعـدة`)
       
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('#6e4b00')
      .setTitle("**𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . 𝗧𝗶𝗰𝗸𝗲𝘁**")
      .setDescription(`__**قـسـم الـمـسـاعـدة .

<a:00:1176226411774750822> — مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـمـسـاعـدة .

<a:pp887:1176253226723590144> — لـطـب خـدمـة أو وجـود اسـتـفـسـار الـرجـاء الـنـقـر عـلـى ( تـذكـرة قـسـم الـمـسـاعـدة ) .

<a:736257973906571306:1176226228592713929> — ويـرجـى الالـتـزام بالانـظـمـة الـمـوضـحـة ادنـاه .

1 — احـتـرام الاداري .
2 — شـرح مـشـكـلـتـك بـالـتـفـصـيـل .
3 — عـدم اكـثـار مـنـشـن .
4 — تـوفـر الأدلـة الـكـافـيـة وإرفـاقـهـا بـالتـكـت .

<a:93DF6B7880944A298485A6FC945B707D:1176249637234016286> — نـرجـو الالـتـزام بالانـظـمـة وعـدم مـخـالـفـتـهـا .

( مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق )**__`)
.setImage("https://media.discordapp.net/attachments/1176357444180525217/1257846596096233513/e943ce0dbdaabfbb.png?ex=6685e46e&is=668492ee&hm=4e2bfdfef001f78b04850c8f53e65cf2dc83c6245ef0551901d69aac5347eabd&=&format=webp&quality=lossless&width=1441&height=459")

    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}