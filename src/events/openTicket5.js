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
    let sri = "1175886776922034329" //ايدي رتبة السبورت
    if (interaction.customId == "opens5") {
      let channels = (await interaction.guild.channels.fetch()).filter(c=>c.parentId == "1199032523150340301")
      if(channels.some(c=> c.topic == interaction.member.id)) return interaction.reply({content : "لديك تكت مفتوحة بالفعل",ephemeral : true})
        db.add("www6",1)
      let ch = await interaction.guild?.channels.create({
        name: `مـسـاعـدة﹣${db.get("www6")}`,
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
        parent: "1199032523150340301",
        topic : interaction.member.id
      })
      ch.send({content : `**__
<@&${sri}> - ${interaction.member}__**`,
    embeds : [new EmbedBuilder()
      .setTitle(`__**تـذكـرة قـسـم الـمـسـاعـدة**__`)
      .setTimestamp()
      .setColor('#ffd100')
      .setDescription(`**__<:pp721:1156215778027257957> - مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـمـسـاعـدة .

<:pp449:1173072675409760306> - نـرجـوا مـنـك عـزيـزي الـعـضـو إنـتـظـار إسـتـلام تـذكـرتـك مـن أحـد طـاقـم الإدارة__**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim5")
              .setStyle(ButtonStyle.Success)
              .setLabel("إسـتـلام الـتـذكـرة"),
            new ButtonBuilder()
              .setCustomId("trk5")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("تـرك الـتـذكـرة"),
              new ButtonBuilder()
      .setCustomId("close5")
      .setLabel("قــفــل الـتـذكـرة")
      .setStyle(ButtonStyle.Danger),
          )]
      })
interaction.reply({embeds: [    {
    "title": "تم فتح لك تذكرة",
    "description": `العضو : ${interaction.member}\nالتذكرة : ${ch}`,
    "color": 15195648
  }],ephemeral:true})   
 }
  }
}