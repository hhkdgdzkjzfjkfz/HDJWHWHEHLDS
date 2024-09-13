const { ActionRowBuilder, StringSelectMenuBuilder } = require('@discordjs/builders');
const { Client, Message, SelectMenuOptionBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
let rolesDb = [
  
  ["1175886806760304650","1243084380000354335","1243514447264481290","1206932609439891538","1231309008854450236","1195885917303492681","1226765950272147467","1240967761920786464","1211707932518129745","1211682300928983100","1244244146101948467","1244244153932714024","1198030920087777440","1242869406443376642","1210218825522618460","1198031638622371901","1242869424126427216","1175886829585694731","1245089522249760788","1207274768219242496","1175886816398807103","1211707975698350183","1175886817480945664","1242878756155031573","1243906925230293073","1175886835893940294","1175886837143842817","1175886838381170860","1175886839362637935","1175886840419590186","1175886841715634216","1175886842919387237","1175886843917647952","1175886844873945118","1175886845847031851","1175886846887219241","1175886849126977706","1175886850410418176","1175886851484172338","1175886852545331261","1240965013036990464","1175886848049037382","1175886853551951952","1175886854894133369","1175886856458612768","1242529523606753334","1175886857582678158","1245674155823730689","1196414333450719292","1242773858629713951","1175886832563662958","1175886815497039965","1175886858891317288"],
  ["1238997095260754067","1238997231198146711","1238997353088684094","1240840743036260395","1240840743791099904","1217323362028617738","1212209033453506591","1226958615697559612","1226958540145557524","1175886891598483486","1188895790479974431","1176278333311426590"],
  ["1252218499917680760" , "1175886864377458809","1175886865748987934","1175886867556728972","1175886869964267650","1175886868865351840","1175886870970912959","1184460610273026059"],
 ["1175886877287522405","1175886874879995924","1175886876264112249","1204713610006499378","1204717595727757322","1184182451526967416","1184184560582406296","1184184580354355351","1175886878688411688","1175886879783137341"],

]
module.exports = class AcceptCommand extends BaseCommand {
  constructor() {
    super('تقاعد', 'roles', []);
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
        name : "- الـعـسـكـريـة .",
        id :"0"
      },
 {
      name : "- الـحـواري .",
      id : "1"
    },
       {
      name : "- وزارة الإعـلام .",
      id: "2"
    },
    {
      name :"- وزارة الـعـدل .",
      id : "3"
        }]
    if(!message.mentions.members?.first()) return message.reply({content : `**__. <:pp449:1173072675409760306> – عـزيـزي الإداري .

<:pp721:1156215778027257957> -  الـرجـاء مـنـك تـحـديـد الـعـضـو.

( وشـكـرآ لـك )__**`})
    let s = new StringSelectMenuBuilder()
    .setCustomId("kia3at")
    .setMaxValues(1)
    .setPlaceholder("- أخـتـر جـهـة الـتـقـاعـد .")
    ob.forEach(x=>{
      s.addOptions([new SelectMenuOptionBuilder().setLabel(x.name).setValue(x.id)])
    })
    let rowq = new ActionRowBuilder()
    .addComponents(
      s
    )
   let dk = await  message.reply({components :[rowq]})
    const filter = (interaction) => interaction.user.id == message.author.id;

    let collected = await dk.awaitMessageComponent({ filter, time: 15_000}).catch((c) =>{
        console.log(`After five seconds, ${c.size} messages are collected.`)
        message.channel.send(" تم الغاء الامر لعدم التفاعل")
    });
      if(!collected) return
    rolesDb[Number(collected.values[0])].forEach(k=>{
      message.mentions.members.first()?.roles.remove(k).catch(null)
    })
   collected.reply({content : `**__ <:pp449:1173072675409760306> – عـزيـزي الإداري - ${message.member} .

<a:emoji_194:1176305402875486319> - تـم تـقـاعـد الـعـضـو بـنـجـاح . - ${message.mentions.members.first()} .

<:pp863:1176253352112304272> - الـوظـيـفـه . - ${collected.component.options.find(x=> x.value == collected.values[0]).label} .

( وشـكـرآ لـك )__**`})
    let ob77 = ob.concat(ob)
    client.n38th.add(`tga3d-${message.author.id}`,1)
    client.channels.cache.get("1175887578956836916").send({
      content : `
تم سحب رتب العضو : ${message.mentions.members.first()}
بواسطة الادمن : ${message.member}
كـ : ${ob77.find(k=>k.id == collected.values[0])?.name}
`
    })
client.n38th.add(`${message.author.id}UnJob`,1)  
    }
}