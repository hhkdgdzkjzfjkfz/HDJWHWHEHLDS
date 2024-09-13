const { Client, Message,ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class AcceptCommand extends BaseCommand {
  constructor() {
    super('فارغ','فارغ',[]);
  }
  
  async run(client, message, args) {
if(!message.member.roles.cache.some(r => r.id === client.role.Admin)) return;
      
if (message.channel.id !== client.role.GiveRole) return;
 let user = message.mentions.users.first()
if (!user) return message.channel.send({ content:`**__ <:emoji_8:1156215106875703326>  – عـزيـزي الإداري . 

 <a:00:1176226411774750822>  - يـجـب عـلـيـك مـنـشـن الـعـضـو لأكـمـال الـتـوظـيـف بـالـشـكـل الـصـحـيـح . 

 ( وشـكـرآ لـك )__** `})

 let u = message.guild.members.cache.get(user.id)

    if (u.roles.cache.some(r => client.role.Police6.includes(r.id))) return message.channel.send({ content:`**__ <:emoji_8:1156215106875703326>  – عـزيـزي الإداري . \n\n <a:736257973906571306:1176226228592713929>  - الـعـضـو مـوظـف بـالـفـعـل بـالـوظـيـفـة الـمـرغـوبـة . \n\n ( وشـكـرآ لـك )__**` })

    let roles = client.role.Police6
    roles.forEach(async r => {
      u.roles.add(r)
    })

    client.n38th.add(`job-${message.author.id}`,1)

    message.channel.send({ content: `**__ <:pp449:1173072675409760306> – عـزيـزي الإداري  .

<a:emoji_194:1176305402875486319> - تـم تـوظـيـف الـعـضـو بـنـجـاح . - ${user} .

( وشـكـرآ لـك )__**` })
  }
}