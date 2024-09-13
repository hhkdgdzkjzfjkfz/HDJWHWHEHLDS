const { Client, EmbedBuilder, Message, TextChannel, PermissionFlagsBits, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const  roel7 = "1261761071941685449"
const BaseEvent = require('../utils/structures/BaseEvent');
module.exports = class InteractionCreateEvent extends BaseEvent {
  constructor() {
    super('interactionCreate');
  }
  
  async run(client, interaction) {
    if (!interaction.isButton()) return
    if (interaction.customId == "claim7") {
      if (!interaction.member.roles.cache.has(roel7)) return
            if(await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت مستلمة بالفعل",ephemeral : true})
      client.n38th.set(interaction.channelId,interaction.user.id)
      interaction.channel.permissionOverwrites.edit(interaction.user.id, {
        ViewChannel: true
      })

      interaction.channel.permissionOverwrites.edit(roel6, {
        ViewChannel: false
      })
      interaction.reply({ content: "<a:emoji_194:1176305402875486319>",ephemeral: true})
      interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#0b0b0b')
            .setDescription(`رساله الاستلام${interaction.member}`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`, 0) 

    }
    if (interaction.customId == "trk7") {
      if (!interaction.member.roles.cache.has(roel6)) return
      if(!await client.n38th.get(interaction.channelId)) return interaction.reply({content : "التكت غير مستلمة",ephemeral : true})
      if(await client.n38th.get(interaction.channelId) != interaction.user.id) return interaction.reply({content : "لست مالك التكت",ephemeral : true})
            await client.n38th.delete(interaction.channelId)
      interaction.channel.permissionOverwrites.edit(roel6, {
        ViewChannel: true
      })
                  interaction.channel.permissionOverwrites.edit(interaction.member.id, {
        ViewChannel: null
      })
      interaction.reply({ content: "<a:emoji_194:1176305402875486319>" ,ephemeral: true})
        interaction.channel.send({
        embeds: [
          new EmbedBuilder()
            .setColor('#0b0b0b')
            .setDescription(`رساله الترك${interaction.member}`)
            .setTimestamp()

        ]
      })
      client.n38th.add(`${interaction.user.id}tieketp`,  -0) 

    }
    if (interaction.customId == "delete7") {
      if (!interaction.member.roles.cache.has(roel7)) return
      interaction.channel.delete()
    }
    if (interaction.customId == "open7") {
      if(!interaction.member?.permissions.has("Administrator")) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      },{
        id : interaction.channel.topic,
        allow : ['ViewChannel']
      },
    {
      id : roel6,
      allow : ['ViewChannel']
    }])
    interaction.reply({content  :"<a:emoji_194:1176305402875486319>"})
    interaction.channel.setParent("1258506183929495596")
    }
    if (interaction.customId == "close7") {
      if (!interaction.member.roles.cache.has(roel7)) return
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
          .setCustomId("confirm7")
          .setStyle(ButtonStyle.Danger)
          .setLabel("تأكيد")
            )
        ]
      })

    }
    if(interaction.customId == "confirm7"){
      if (!interaction.member.roles.cache.has(roel7)) return
      interaction.channel.permissionOverwrites.set([{
        id : interaction.guild?.id,
        deny : ['ViewChannel']
      }])
      interaction.reply({content  :"<a:emoji_194:1176305402875486319>"})
      interaction.channel.setParent("1258506183929495596")
    }
  }
}
