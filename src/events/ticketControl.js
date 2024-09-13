const { Client, EmbedBuilder, Message, TextChannel, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
let  supportId  = "1175886776922034329"
const BaseEvent = require('../utils/structures/BaseEvent');
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
    if (interaction.customId == "claim") {
      if (!interaction.member.roles.cache.has(supportId)) return
      if(await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت مستلمة بالفعل",ephemeral : true})
      client.n38th.set(interaction.channelId,interaction.user.id)
      interaction.channel.permissionOverwrites.edit(interaction.user.id, {
        ViewChannel: true
      })
interaction.channel.permissionOverwrites.edit('1175886746664308838',{
        ViewChannel: true
      })
      interaction.channel.permissionOverwrites.edit(supportId, {
        ViewChannel: false
      })
      interaction.reply({ content: "✅",ephemeral: true})
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#f1d401')
            .setDescription(`**__ <:pp721:1156215778027257957> - مـرحـبـآ بـك عـزيـزي الـعـضـو

<:pp449:1173072675409760306> - تـم إسـتـلام تـذكـرتـك مـن قـبـل الإداري : ${interaction.member} __**`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`,  0) 
    }
    if (interaction.customId == "trk") {
      if (!interaction.member.roles.cache.has(supportId)) return
      if(!await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت غير مستلمة",ephemeral : true})
      if(await client.n38th.get(interaction.channelId) != interaction.user.id) return interaction.reply({content : "لست مالك التكت",ephemeral : true})
            await client.n38th.delete(interaction.channelId)

      interaction.channel.permissionOverwrites.edit(supportId, {
        ViewChannel: true
      })
            interaction.channel.permissionOverwrites.edit(interaction.member.id, {
        ViewChannel: null
      })
      interaction.reply({ content: "✅" ,ephemeral: true})
                interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#f1d401')
            .setDescription(`**__<:pp721:1156215778027257957> - عـزيـزي الـعـضـو :

<:pp449:1173072675409760306> - تـم فـك اسـتـلام الـتـكـت مـن قـبـل الاداري الـرجـاء انـتـظـار احـد طـاقـم الاداره لـ اسـتـلام الـتـذكـرة__**`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`,  -0) 

    }
    if (interaction.customId == "delete") {
      if (!interaction.member.roles.cache.has(supportId)) return
      interaction.channel.delete()
    }
    if (interaction.customId == "open11") {
      if(!interaction.member?.permissions.has("Administrator")) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      },{
        id : interaction.channel.topic,
        allow : ['ViewChannel']
      },
    {
      id : supportId,
      allow : ['ViewChannel']
    }])
    interaction.reply({content  :":white_check_mark:"})
    interaction.channel.setParent("1202878312788131840")
    }
    if (interaction.customId == "close") {
      if (!interaction.member.roles.cache.has(supportId)) return
      interaction.reply({
                embeds: [{
"title": `**__<a:736257973906571306:1176226228592713929>  — طـلـب إغـلاق الـتـكـت __**`,
          "description": `__**<a:00:1176226411774750822> — تـم رفـع طـلـب اغـلاق الـتـكـت لـمـسـؤول الـتـذكـرة

— نـرجـوا مـنـك انـتـظـار قـبـول اغـلاق الـتـذكـرة والـرجـاء عـدم ازعـاج الـمـسـؤول

<:gulF7:1241727792257826877> — مـع تـمـنـيـاتـنـا لـكـم بـالـتـوفـيـق**__`,
          "color": 15076621
        }],

        components : [
          new ActionRowBuilder()
          .addComponents(
          new ButtonBuilder()
          .setCustomId("confirm")
          .setStyle(ButtonStyle.Danger)
          .setLabel("اغــلاق الـتـذكـره")
            )
        ]
      })

    }
    if(interaction.customId == "confirm"){
      if (!interaction.member.roles.cache.has(supportId)) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      }])
      interaction.reply({content  :"تم"})
      interaction.channel.setParent("1202878312788131840")
    }
  }
}