const { ActionRowBuilder, StringSelectMenuBuilder } = require('@discordjs/builders');
const { Client, Message, SelectMenuOptionBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
let rolesDb = [
  ["1175886831561220276","1175886815497039965","1175886857582678158","1175886856458612768"],
  ["1175886832563662958","1175886815497039965","1175886857582678158","1175886856458612768"],
  ["1175886815497039965","1196414333450719292","1175886857582678158","1175886856458612768"],
  ["1175886815497039965","1198024480296030409","1175886857582678158","1175886856458612768"],
  ["1175886906261778534","1188895790479974431"],
  ["1175886868865351840","1175886870970912959"],
  ["1175886864377458809","1175886867556728972"],
  ["1175886873651060736","1175886877287522405"],
 ["1175886873651060736","1175886878688411688"],
 ["1175886873651060736","1175886879783137341"],

]
module.exports = class AcceptCommand extends BaseCommand {
  constructor() {
    super( 'roles' ,'ااا', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member?.roles.cache.has("1175886776922034329") && message.member.id != "1175886776922034329") return message.reply({content:"لاتملك صلاحية استخدام هذا الامر"})
    let ob = [
      {
        name : "- الامـن الـعـام .",
        id :"0"
      },
      {
        name : "- الـقـوات الـمـشـتـركـة .",
        id :"1"
      },
      
 {
        name : "- حـرس الـحـدود .",
        id :"2"
      },

 {
        name : "- الـحـرس الـمـلـكـي .",
        id :"3"
      },


    ]
    let ob2 = [{
      name : "- 𝗖𝗢𝗭𝗔 .",
      id : "4"
    },

    ]
    let ob3 = [{
      name : "- اعـلامـي قـولـف .",
      id: "5"
    },
    {
      name :"- قـنـاة الـخـلـيـج .",
      id : "6"
    },


    {
      name :"- مـحـامـي .",
      id : "8"
    },
    {
      name : "- قـاضـي .",
      id : "9"
    },
{
      name :"- مـكـافـحـة الـفـسـاد .",
      id : "10"
    }
]
    if(!message.mentions.members?.first()) return message.reply({content : `**__. <:pp449:1173072675409760306> – عـزيـزي الإداري .

<:pp721:1156215778027257957> -  الـرجـاء مـنـك تـحـديـد الـعـضـو.

( وشـكـرآ لـك )__**`})
    let s = new StringSelectMenuBuilder()
    .setCustomId("kia3at")
    .setMaxValues(1)
    .setPlaceholder("- الـوظـائـف الـحـكـومـيـة .")
    ob.forEach(x=>{
      s.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let s2 = new StringSelectMenuBuilder()
    .setCustomId("esabat")
    .setMaxValues(1)
    .setPlaceholder("- الـعـصـابـات .")
    ob2.forEach(x=>{
      s2.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let s3 =   new StringSelectMenuBuilder()
    .setCustomId("other")
    .setMaxValues(1)
    .setPlaceholder("- الـوظـائـف الـعـامـه .")
    ob3.forEach(x=>{
      s3.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let rowq = new ActionRowBuilder()
    .addComponents(
      s
    )
    let rowq2 = new ActionRowBuilder()
    .addComponents(
      s2
    )
    let rowq3 = new ActionRowBuilder()
    .addComponents(
      s3
    )
    let user = message.guild.members.cache.get(message.mentions.members.first().id)
   if(user.id == message.author.id){
return message.reply('فله توظف نفسك ؟')
}
   let dk = await  message.reply({components :[rowq,rowq2,rowq3]})
    const filter = (interaction) => interaction.user.id == message.author.id;

    let collected = await dk.awaitMessageComponent({ filter, time: 15_000}).catch((c) =>{
        console.log(`After five seconds, ${c.size} messages are collected.`)
        dk.edit({content:":x: | تم الغاء الامر لعدم التفاعل", components:[]})
    });
      if(!collected) return
        rolesDb[Number(collected.values[0])].forEach(k=>{
     if(user.roles.cache.ha(k)){
return message.reply(`**__ خبل انت توظف واحد متوظف تدور النقاط ؟ __**`)
} message.mentions.members.first()?.roles.add(k).catch(null)
    })
    collected.reply({content : `**__ <:pp449:1173072675409760306> – عـزيـزي الإداري - ${message.member} .

<a:emoji_194:1176305402875486319> - تـم تـوظـيـف الـعـضـو بـنـجـاح . - ${message.mentions.members.first()} .

<:pp863:1176253352112304272> - الـوظـيـفـه . - ${collected.component.options.find(x=> x.value == collected.values[0]).label} .

( وشـكـرآ لـك )__**`})
    let ob77 = ob.concat(ob2,ob3)
   client.n38th.add(`job-${message.author.id}`,1)
    client.channels.cache.get("1175887578956836916").send({
      content : `
تم قبول العضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}
كـ : ${ob77.find(k=>k.id == collected.values[0])?.name}
`
    })
    }
}