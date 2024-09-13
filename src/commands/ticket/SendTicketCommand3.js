const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket3', 'ticket', []);
  }
 
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('opens3')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`تـذكـرة - طـلـب - الـقـيـادة`)
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('#6e4b00')
      .setTitle("**𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . 𝗧𝗶𝗰𝗸𝗲𝘁**")
      .setDescription(`__**طـلـب الـقـيـادة .

<a:00:1176226411774750822> — مـلاحـظـات مـهـمـة 

1 — يـمـنـع فـتـح الـتـذكـرة لأسـبـاب تـافـهـه ولا تـسـتـحـق تـدخـل<@&1175886712833060914>  .

2 — يـمـنـع اكـثـار الـمـنـشـن

3 — فـي حـال لـديـك شـكـوى لـم تـحـل يـجـب ارفـاق الأدلـة الـكـافـيـة .

4 — فـي حـال مـخـالـفـتـك لأحـد الانـظـمـة ( تـايـم 1h )

<a:0white:1166010841464848395> — قـيـادة حـلـم الـخـلـيـج تـحـت خـدمـتـكـم دائـمـا وابـدا .

( مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق )**__`)
.setImage("https://cdn.discordapp.com/attachments/1176357444180525217/1257846795401429043/c7d6a4f62c59addd.png?ex=6685e49d&is=6684931d&hm=846d4d9d0a78ee9d053be65194da91d4a2c9136a9b56046ea955a9965e7ee667&")

    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}