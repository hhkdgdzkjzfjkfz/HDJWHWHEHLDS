// @ts-nocheck
const { Client, Message } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
module.exports = class FahesCommand extends BaseCommand {
  constructor() {
    super('نداء', 'eco', []);
  }
  /**
   * 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  async run(client, message, args) {
    if(!message.member.roles.cache.has("1175886776922034329")) return
    if(!message.mentions.members.first()) return message.reply({
      content : `__**<a:00:1176226411774750822> — مـنـشـن الـعـضـو

( وشـكـرآ لـك )**__`
    })
    let m = message.mentions.members.first()
    message.reply({
      content : `__**<a:93DF6B7880944A298485A6FC945B707D:1176249637234016286> — تـم نـداء الـعـضـو .

<a:00:1176226411774750822> — سـوف يـأتـيـك فـي اقـرب وقـت مـمـكـن 

( وشـكـرآ لـك )**__`
    })
    m.send({content:`__**<:pp721:1156215778027257957> — عـزيـزي الـعـضـو 

<a:00:1176226411774750822> — تـم مـنـاداتـك بـالـتـذكـرة ${message.channel}

مـن قـبـل الاداري ${message.member}

( وشـكـرآ لـك )**__`}).catch(e=>console.log(e))
  }
}