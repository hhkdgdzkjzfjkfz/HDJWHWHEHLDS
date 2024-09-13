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
    let sri = "1175886739328471041" //ايدي رتبة السبورت
    if (interaction.customId == "opens2") {
      let channels = (await interaction.guild.channels.fetch()).filter(c=>c.parentId == "1175887425625653248")
      if(channels.some(c=> c.topic == interaction.member.id)) return interaction.reply({content : "لديك تكت مفتوحة بالفعل",ephemeral : true})
await interaction.deferReply({ ephemeral: true });
        db.add("www3",1)
      let ch = await interaction.guild?.channels.create({
        name: `شـكـاوي﹣${db.get("www3")}`,
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
        parent: "1175887425625653248",
        topic : interaction.member.id
      })
      ch.send({
        content: `
${interaction.member} - <@&${sri}>
`,
        embeds: [new EmbedBuilder()
          .setTitle(`**__تـذكـرة الـشـكـاوي الـعـامـة__**`)
          .setTimestamp()
          .setColor('#ffd100')
          .setDescription(`**__<:pp721:1156215778027257957> - مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـشـكـاوي الـعـامـة .

<:pp449:1173072675409760306> - نـرجـوا مـنـك عـزيـزي الـعـضـو إنـتـظـار إسـتـلام تـذكـرتـك مـن أحـد طـاقـم الـعـلـيـا__**`)],

        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim2")
              .setStyle(ButtonStyle.Success)
              .setLabel("إسـتـلام الـتـذكـرة"),
            new ButtonBuilder()
              .setCustomId("trk2")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("تـرك الـتـذكـرة"),
              new ButtonBuilder()
      .setCustomId("close2")
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