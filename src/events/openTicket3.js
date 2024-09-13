//@ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { Client, PermissionFlagsBits, ButtonStyle } = require('discord.js');
const BaseEvent = require('../utils/structures/BaseEvent');

const db = require("pro.db")

module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  /**
   * 
   * @param {Client} client 
   * @param {import('discord.js').Interaction} interaction 
   */
   async run(client, interaction) {
    if (!interaction.isButton()) return
    let sri = "1175886712833060914" //ايدي رتبة السبورت
    if (interaction.customId == "opens3") {
      let channels = (await interaction.guild.channels.fetch()).filter(c=>c.parentId == "1175887362602041467")
      if(channels.some(c=> c.topic == interaction.member.id)) return interaction.reply({content : "لديك تكت مفتوحة بالفعل",ephemeral : true})
        db.add("www4",1)
      let ch = await interaction.guild?.channels.create({
        name: `قـيـادة﹣${db.get("www4")}`,
        permissionOverwrites: [
          {
            id: interaction.guildId,
            deny: PermissionFlagsBits.ViewChannel
          },
          {
            id: interaction.member.id,
            allow: [PermissionFlagsBits.ViewChannel,PermissionFlagsBits.MentionEveryone,PermissionFlagsBits.AttachFiles]
          },
          {
            id: sri,
            allow: PermissionFlagsBits.ViewChannel
          }
        ],
        parent: "1175887362602041467",
        topic : interaction.member.id
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>
`,
        embeds: [new EmbedBuilder()
          .setTitle(`**__قـسـم - طـلب - اونـر__**`)
          .setTimestamp()
          .setColor('#ffd100')
          .setDescription(`**__
<:GulF8:1257757864664109127> - مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الاونـرز  . 

<:pp721:1156215778027257957> - نـرجـوا مـنـك عـزيـزي الـعـضـو 
إنـتـظـار إسـتـلام تـذكـرتـك مـن أحـد طـاقـم الإدارة
__**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("delete3")
              .setStyle(ButtonStyle.Danger)
              .setLabel("حـذف الـتـذكـرة"),
          )]
      })
      interaction.reply({embeds: [    {
        "title": "تم فتح لك تذكرة",
        "description": `العضو : ${interaction.member}\nالتذكرة : ${ch}`,
        "color": 15195648
      }],ephemeral:true})     }
  }
}