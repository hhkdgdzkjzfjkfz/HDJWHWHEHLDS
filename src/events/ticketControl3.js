// @ts-nocheck
// https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-interactionCreate
const { Client, EmbedBuilder } = require('discord.js');
const  helpRole = "1175886712833060914"
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
    if (interaction.customId == "claim3") {
      if (!interaction.member.roles.cache.has(helpRole)) return
              if(await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت مستلمة بالفعل",ephemeral : true})
      client.n38th.set(interaction.channelId,interaction.user.id)
      interaction.channel.permissionOverwrites.edit(interaction.user.id, {
        ViewChannel: true
      })
      
      interaction.channel.permissionOverwrites.edit(helpRole, {
        ViewChannel: false

      })
      interaction.reply({ content: "<a:emoji_194:1176305402875486319>",ephemeral: true})
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#f1d401')
            .setDescription(`**__ <:pp721:1052203073696694332> - مـرحـبـآ بـك عـزيـزي الـعـضـو

 <:m7:1076932157630586970> - تـم إسـتـلام تـذكـرتـك مـن قـبـل الإداري : ${interaction.member} __**`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`,  0) 

    }
    if (interaction.customId == "trk3") {
      if (!interaction.member.roles.cache.has(helpRole)) return
      if(!await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت غير مستلمة",ephemeral : true})
      if(await client.n38th.get(interaction.channelId) != interaction.user.id) return interaction.reply({content : "لست مالك التكت",ephemeral : true})
            await client.n38th.delete(interaction.channelId)
      interaction.channel.permissionOverwrites.edit(helpRole, {
        ViewChannel: true
      })
                  interaction.channel.permissionOverwrites.edit(interaction.member.id, {
        ViewChannel: null
      })
      interaction.reply({ content: "<a:emoji_194:1176305402875486319>" ,ephemeral: true})
                interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#f1d401')
            .setDescription(`**__<:pp721:1052203073696694332> - عـزيـزي الـعـضـو :

<:pp721:1052203073696694332> - تـم فـك اسـتـلام الـتـكـت مـن قـبـل الاداري الـرجـاء انـتـظـار احـد طـاقـم الاداره لـ اسـتـلام الـتـذكـرة__**`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`,  -0) 

    }
    if (interaction.customId == "delete3") {
      if (!interaction.member.roles.cache.has(helpRole)) return
      interaction.channel.delete()
    }
    if (interaction.customId == "open3") {
      if(!interaction.member?.permissions.has("Administrator")) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      },{
        id : interaction.channel.topic,
        allow : ['ViewChannel']
      },
    {
      id : helpRole,
      allow : ['ViewChannel']
    }])
    interaction.reply({content  :"<a:emoji_194:1176305402875486319>"})
    interaction.channel.setParent("1049243276546416650")
    }
    if (interaction.customId == "close3") {
      if (!interaction.member.roles.cache.has(helpRole)) return
      interaction.reply({
        embeds: [{
          "title": "تاكيد اغلاق",
          "description": "هل انت متأكد من رغبتك في اغلاق التكت ؟",
          "color": 15076621
        }],
        components : [
          new ActionRowBuilder()
          .addComponents(
          new ButtonBuilder()
          .setCustomId("confirm3")
          .setStyle(ButtonStyle.Danger)
          .setLabel("تأكيد")
            )
        ]
      })

    }
    if(interaction.customId == "confirm3"){
      if (!interaction.member.roles.cache.has(helpRole)) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      }])
      interaction.reply({content  :":white_check_mark:"})
      interaction.channel.setParent("")
    }
  }
}
