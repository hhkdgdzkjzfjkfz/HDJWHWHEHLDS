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
    if (interaction.customId == "opens") {
      let channels = (await interaction.guild.channels.fetch()).filter(c=>c.parentId == "1175887369799479296")
      if(channels.some(c=> c.topic == interaction.member.id)) return interaction.reply({content : "لديك تكت مفتوحة بالفعل",ephemeral : true})
        db.add("www1",1)
      let ch = await interaction.guild?.channels.create({
        name: `تـفـعـيـل﹣${db.get("www1")}`,
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
        parent: "1175887369799479296",
        topic : interaction.member.id
      })
      ch.send({content : `**__إسـتـبـيـان تـفـعـيـل فـي دولـة 𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺

أسـمـك : 

عـمرك : 

أيـديك : 

مـاهو الـقانون الذهبي : 

عـرف الـرول بـلاي :

مـاهـو قـانـون  LAR : 

مـاهو قـانـون RDM : 

مـاهـو قـانـون VDM : 

عـرف الحـاجز الـسمعي : 

هـل يـسمح الـخطف بـالـمـنـطـقـة الآمـنـة : 

هـل يـسـمح سـرقة الممـتلكات الحـكومية : 

هـل يـسمح الإزعـاج فـي المـراكز الحـكوميـة : 

هـل يـسمح القـدوم للـمراكز أول عـشر دقائـق : 

هـل يـسمـح الـخطـف أول عشر دقائق : 

بـعد إنـفـجار كـم كـفر يـجب التـوقف : 


( مـلاحـظـة )

فـي حـال قـبـولـك يـرجـى الـتـوجـة لـروم إنـتـظـار الـتـفـعـيـل لـقـول الـقـسـم لإكـمـال تـفـعـيـلـك

<@&${sri}> - ${interaction.member}__**`,
    embeds : [new EmbedBuilder()
      .setTitle(`__**تـذـكـرة - تـفـعـيـل**__`)
      .setTimestamp()
      .setColor('#ffd100')
      .setDescription(`**__<:pp721:1156215778027257957> - مـرحـبـا بـك عـزيـزي الـعـضـو فـي قـسـم الـتـفـعـيـل .

<:pp449:1173072675409760306> - نـرجـوا مـنـك عـزيـزي الـعـضـو إنـتـظـار إسـتـلام تـذكـرتـك مـن أحـد طـاقـم الإدارة__**`)],
        components: [new ActionRowBuilder()
          .addComponents(
            new ButtonBuilder()
              .setCustomId("claim")
              .setStyle(ButtonStyle.Success)
              .setLabel("إسـتـلام الـتـذكـرة"),
            new ButtonBuilder()
              .setCustomId("trk")
              .setStyle(ButtonStyle.Secondary)
              .setLabel("تـرك الـتـذكـرة"),
              new ButtonBuilder()
      .setCustomId("close")
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