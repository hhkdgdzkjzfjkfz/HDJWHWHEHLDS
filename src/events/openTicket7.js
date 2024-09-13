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
    let sri = "1184184560582406296" //ايدي رتبة السبورت
    if (interaction.customId == "opens7") {
      let channels = (await interaction.guild.channels.fetch()).filter(c=>c.parentId == "1261761456597241996")
      if(channels.some(c=> c.topic == interaction.member.id)) return interaction.reply({content : "لديك تكت مفتوحة بالفعل",ephemeral : true})
        db.add("www8",1)
      let ch = await interaction.guild?.channels.create({
        name: `قـضـيـة﹣${db.get("www8")}`,
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
        parent: "1261761456597241996",
        topic : interaction.member.id
      })
      ch.send({
        content: `<:IMG_6220removebgpreview:1219619252193984572> **__— شـكـوى قـضـائـيـة .

<:emoji_128:1209512536383299616> — الـمـدعـي : 

<:pp863:1176253352112304272> — الـمـدعـى عـلـيـه : 

<:T5:1206314518117093426> — سـبـب رفـع الـقـضـيـة : 

<:pp814:1216820553650802710> — نـوع الـقـضـيـة : 

<:pp863:1176253352112304272> — هـل تـوجـد دلائـل : 

( فـي حـال عـدم تـوفـر الأدلة الـخـطـاب مـرفـوض <:pp863:1176253352112304272> . )__**
${interaction.member} - <@&${sri}>
`,
        embeds: [new EmbedBuilder()
          .setTitle(`**__تـذكـرة رفـع قـضـيـة__**`)
          .setTimestamp()
          .setColor('#ffd100')
          .setDescription(`**__عـزيـزي الـعـضـو الـرجـاء انـتـظـار احـد مـن الـمـسـؤولـيـن__**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("delete7")
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