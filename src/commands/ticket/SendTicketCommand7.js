const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")
const s = require("../../config")
module.exports = class SendTicketCommand extends BaseCommand {
  constructor() {
    super('sendTicket7', 'ticket', []);
  }
  
  async run(client, message, args) {
    if (!message.member.roles.cache.has(s.ticketSender)) return
    let button = new Discord.ActionRowBuilder()
      .addComponents(
        new Discord.ButtonBuilder()
          .setCustomId('opens7')
          .setStyle(Discord.ButtonStyle.Primary)
          .setLabel(`رفـع - قـضـيـة`)
       
      )
    let embed = new Discord.EmbedBuilder()
      .setColor('#6e4b00')
      .setTitle("**𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . 𝗧𝗶𝗰𝗸𝗲𝘁**")
      .setDescription(`<:MOJ:1261457597370994748> ***__- <@&1184182451526967416> .__***

<:1239959425901531279:1261760573704507465> - **__ لإلـتـمـاس رفـع قـضـيـة يـرجـى الـنـقـر عـلـى /
__**
**__<:T5:1206314518117093426> — رفـع قـضـيـة .__**`)
.setImage("https://media.discordapp.net/attachments/1176357444180525217/1258451955710296209/8_.png?ex=66881837&is=6686c6b7&hm=b84dda39a096c8e7b883b54ff262a07b283da81318e0828a2ff3a2fd00f90755&")

    message.channel.send({
      embeds: [embed],
      components: [button]
    })
  }
}