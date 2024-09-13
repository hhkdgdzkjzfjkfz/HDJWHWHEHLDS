const { Client,Partials } = require('discord.js');
const Discord = require("discord.js")
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client({ intents: 3276799,partials: [Partials.Message, Partials.Channel, Partials.User]});
const { QuickDB } = require("quick.db");

const db = new QuickDB();
(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  client.n38th = db;
  client.role = require('./configs/Role')
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})()

process.on('unhandledRejection', (reason, p) => {
  console.log(reason)
});

process.on('uncaughtException', (err, origin) => {
  console.log(err)
});
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err)
});


client.on('messageCreate', async message => {
  if (message.content.startsWith('-تفعيل')) {
let member = message.mentions.members.first();
if (!message.member.roles.cache.has('1175886776922034329'))
   if(!message.member.permissions.has("Administrator")) return message.reply(`**لا يـوجـد لـديـك صـلاحـيـات**`).catch(err => console.log(err))
    if (!member) return message.reply(`**__. <:emoji_8:1156215106875703326>  – عـزيـزي الإداري .

<a:00:1176226411774750822>  -  الـرجـاء مـنـك تـحـديـد الـعـضـو.

( وشـكـرآ لـك )__**`).catch(err => console.log(err))
    let role = message.guild.roles.cache.get('1204853334402539630');
    let role2 = message.guild.roles.cache.get('1228955490369929236');
    let role4 = message.guild.roles.cache.get('1175886940722180187');
    member.roles.add(role).catch(err => console.log(err))
    member.roles.add(role2).catch(err => console.log(err))
    member.roles.remove(role4).catch(err => console.log(err))
    message.channel.send(`**__. <:pp721:1156215778027257957> – عـزيـزي الإداري .

<a:emoji_194:1176305402875486319> - تـم تـفـعـيـل الـعـضـو بـنـجـاح .

الـعـضـو : ${member}  .

( وشـكـرآ لـك )__**`)

      member.send(`**__ <:pp721:1156215778027257957> - عـزيـزي الـعـضـو .

<:GulF8:1257757864664109127> — تـم تـفـعـيـلـك فـي سـيـرفـر حـلـم الـخـلـيـج  للـحـيـاة الـواقـعـيـة نـرجـوا مـنـك الإلـتـزام بـالـقـسـم وبـجـمـيـع الـقـوانـيـن .

( Welcome to - 𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗩𝗿𝗽 - 𝟲𝟬𝗞 . )

( مـع تـمـنـيـاتـنـا لـك بـالـتـوفـيـق )__**`)
      
  await db.add(`${message.author.id}enblep`, 3)}
if (message.content.startsWith(`-قيم`)){
  if (!message.member.roles.cache.has('1175886778603941938'))
   if(!message.member.permissions.has("Administrator")) return 
  let channel = message.mentions.channels.first()
if(!channel) return message.channel.send(`**__. <:pp721:1156215778027257957> – عـزيـزي الإداري .

 - <#1175887846154973215> الـرجـاء مـنـك تـحـديـد شـات  .

( وشـكـرآ لـك )__**`)
  let filter = user => user.author.id == message.author.id;
 message.channel.send(`**__ كـابـتـن الـطـائـرة : __**`).catch(err => console.log(err))
    .then(hh =>{
       message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h1 => { 
h1.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ أيـدي كـابـتـن الـطـائـرة : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h2 => {
h2.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ مـسـاعـد الـكـابـتـن : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h3 => { 
h3.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ أيـدي مـسـاعـد الـكـابـتـن : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h4 => {
h4.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ مـوعـد الـرحـلـة : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h5 => {
h5.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ مـوعـد ركـوب الـطـائـرة : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h6 => {
h6.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__ مـوعـد بـدء الـرحـلـة : __**`) 
  message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h7 => {
h7.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
   hh.edit(`**__تـم ارسـال الـقـيـم الـى ${channel}__**`)
   channel.send(`**__ ~~<:GulF8:1257757864664109127>  — إعـلان رحـلـة لـدولـة - 𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 .~~

 كـابـتـن الـطـائـرة : ${h1.first().content}

أيـدي كـابـتـن الـطـائـرة : ${h2.first().content}

مـسـاعـد الـكـابـتـن : ${h3.first().content}

أيـدي مـسـاعـد الـكـابـتـن : ${h4.first().content}

مـوعـد الـرحـلـة :  ${h5.first().content}

مـوعـد ركـوب الـطـائـرة :  ${h6.first().content}

مـوعـد بـدء الـرحـلـة :  ${h7.first().content}

<a:N_LIFE_28:1176240710287106080> مـلاحـظـات مـهـمة 

( 1 )  يـرجـى عـدم إزعـاج الـكـابـتـن ومـسـاعـدة ف الـخـاص 
( 2 ) إضـافـة كـابـتـن الـطـائـرة أو مـسـاعـدة 
( 3 ) وضـع ظـهـورك مـتـصـل لـيـقـوم الـكـابـتـن أو مـسـاعـدة بإرسـال الـدعـوة لـك 
( 4 ) عـدم فـتـح الـمـايـك داخـل الآنـتـظـار و إزعـاج الـركـاب 

فـي حـال عـدم مـعـرفـتـك كـيـفـيـة ركـوب الـطـائـرة تـوجـة إلـى <#1175887843722285186>

- \@everyone__**`) .then( async rsl=>{

 rsl.react("<:GulF8:1257757864664109127>").catch(err => console.log(err))

channel.send(`https://cdn.discordapp.com/attachments/1176357444180525217/1257843792472707113/a7af49c5c18e6943.png?ex=6685e1d1&is=66849051&hm=f0771984d16e5e49144aaaacb4bc5ec643b78965fe72d17fa93848b5aed6d743&`) 
channel.send(`https://cdn.discordapp.com/attachments/1176357444180525217/1257843815604162632/GulF_Dream_2_1.png?ex=6685e1d7&is=66849057&hm=5c8f386bef25bae2cf2348995e4af162227a430ec02c3621c3e6bc278d688eab&`)
  await db.add(`${message.author.id}gamep`, 5)
   })})})})})})})})})}});

client.on(`messageCreate`,async message=>{
   if (message.content.startsWith(`-تصفير الادارة`)){
       if(!message.member.roles.cache.has('1177219965200388146')) return message.channel.send(`لا يمكنك إستخدام هذا الأمر`)
     await db.deleteAll()
     message.channel.send(`__**عـزيـزي الـمـسـؤول 

— تـم تـصـفـيـر جـمـيـع نـقـاط ادارة حـلـم الـخـلـيـج .

<a:931357666759028746:1205429170792964127> — مـع تـمـنـيـاتـنـا لـك بـالـتـوفـيـق**__`).catch(err => console.log(err))
      let log = new  Discord.EmbedBuilder()
        .setAuthor({name:'𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺'})
    .setDescription(`__**تـم تـصـفـيـر نـقـاط ادارة حـلـم الـخـلـيـج

— الـمـسـؤول : ( ${message.author} )**__`)
    .setFooter({text:"𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗼𝗡 𝗧𝗼𝗣"})
    .setTimestamp()
      .setColor("Yellow") 
    client.channels.cache.get('1175887573458108436').send({embeds:[log]}).catch(err => console.log(err))}
   if (message.content.startsWith(`-تصفير اداري`)){
       if(!message.member.roles.cache.has('1175886720932249751')) return message.channel.send(`**لا يـوجـد لـديـك صـلاحـيـات**`)
      const member = message.mentions.members.first()
  if (!member) return message.channel.send(`**حدد الشخص**`).catch(err => console.log(err))
     message.channel.send(`**تـم اعـادة تـعـيـن نـقـاط ${member} .**`).catch(err => console.log(err))
await db.set(`${member.id}gamep`,0)
await db.set(`${member.id}enblep`,0)
await db.set(`${member.id}addp`,0)
await db.set(`${member.id}tieketp`,0)
      let log = new  Discord.EmbedBuilder()
        .setAuthor({name:'𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺'})
    .setDescription(`__**تـم تـصـفـيـر نـقـاط الاداري ${member}

— الـمـسـؤول : ( ${message.author} )**__`)
    .setFooter({text:"𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗼𝗡 𝗧𝗼𝗣"})
    .setTimestamp()
      .setColor("Yellow") 
    client.channels.cache.get('1175887573458108436').send({embeds:[log]}).catch(err => console.log(err))}
if (message.content.startsWith(`-اضافة نقاط`)){
    const member = message.mentions.members.first()
  let filter = user => user.author.id == message.author.id;
       if(!message.member.roles.cache.has('1175886720932249751')) return message.channel.send(`**لا يـوجـد لـديـك صـلاحـيـات**`)

if (!member) return message.channel.send(`**حـدد الـعـضـو**`).catch(err => console.log(err))
    message.channel.send(`**حـدد الـنـقـاط الـمـضـافـه**`).catch(err => console.log(err))
    .then(async qa =>{
       message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h2 => {
    if (isNaN(+ h2.first().content)) return message.channel.send(`**يـجـب أن يـكـون الاضـافـه تـحـتـوى عـلـى ارقـام**`)
h2.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
qa.delete().catch(error => {
	if (error.code !== 10008) {
		console.error('Failed to delete the message:', error);}});
   message.channel.send(`**تـم اضـافـة الـنـقـاط بـنـجـاح ${h2.first().content} .
 ${member}**`).catch(err => console.log(err))
      let log = new  Discord.EmbedBuilder()
               .setAuthor({name:'𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺'})
    .setDescription(`__**تـم اضـافـة ${h2.first().content} نـقـاط مـن الاداري ${member}

— الـمـسـؤول : ( ${message.author} )**__`)
   
    .setFooter({text:"𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗼𝗡 𝗧𝗼𝗣"})
    .setTimestamp()
      .setColor("Yellow")  
    client.channels.cache.get('1175887573458108436').send({embeds:[log]}).catch(err => console.log(err))
   await db.add(`${member.id}addp`, + h2.first().content)
 })})}
if (message.content.startsWith(`-ازالة نقاط`)){
    const member = message.mentions.members.first()
  let filter = user => user.author.id == message.author.id;     
       if(!message.member.roles.cache.has('1175886720932249751')) return message.channel.send(`**لا يـوجـد لـديـك صـلاحـيـات**`)
  
 
if (!member) return message.channel.send(`**حـدد الـعـضـو**`).catch(err => console.log(err))
    message.channel.send(`**قـم بـكـتـابـت الـنـقـاط الـتـي تـريـد تـخـصـمـها**`).catch(err => console.log(err))
    .then(async qa =>{
       message.channel.awaitMessages({filter:filter, max:1 , time: 240000, errors: ["time"] }).catch(err => console.log(err))
 .then(async h2 => {
    if (isNaN(+ h2.first().content)) return message.channel.send(`**يـجـب أن يـكـون الازالـة تـحـتـوى عـلـى ارقـام**`)
h2.first().delete().catch(error => {
	if (error.code !== 10008) {console.error('Failed to delete the message:', error);}});
qa.delete().catch(error => {
	if (error.code !== 10008) {
		console.error('Failed to delete the message:', error);}});
   message.channel.send(`**تـم إزالـة الـنـقـاط بـنـجـاح ${h2.first().content}
${member}**`).catch(err => console.log(err))
      let log = new  Discord.EmbedBuilder()
        .setAuthor({name:'𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺'})
    .setDescription(`__**تـم ازالـة ${h2.first().content} نـقـاط مـن الاداري ${member}

— الـمـسـؤول : ( ${message.author} )**__`)
    
    .setFooter({text:"𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺 𝗼𝗡 𝗧𝗼𝗣"})
    .setTimestamp()
      .setColor("Yellow") 
    client.channels.cache.get('1175887573458108436').send({embeds:[log]}).catch(err => console.log(err))
   await db.sub(`${member.id}addp`, + h2.first().content)
 })})}
 if (message.content.startsWith(`-نقاط`)){
 const member = message.mentions.members.first() || message.author
       if(!message.member.roles.cache.has('1175886776922034329')) return message.channel.send(`**لا يـوجـد لـديـك صـلاحـيـات**`)
if (await db.get(`${member.id}addp`) === null){
  await db.set(`${member.id}addp`, 0)}
if (await db.get(`${member.id}gamep`) === null){
await db.set(`${member.id}gamep`, 0)}
if (await db.get(`${member.id}enblep`) === null){
await db.set(`${member.id}enblep`, 0)}
if (await db.get(`${member.id}tieketp`) === null){
await db.set(`${member.id}tieketp`, 0)}

if (await db.get(`${member.id}UnJob`) === null){
await db.set(`${member.id}UnJob`, 0)}
if (await db.get(`job-${member.id}`) === null){
await db.set(`job-${member.id}`, 0)}
message.channel.send(`__**<a:TL_49:1206572014668877824> — اسـتـعـلام نـقـاط اداري

— الاداري : ${member}

1 — الـتـكـتـات : ( ${await db.get(`${member.id}tieketp`)} )

2 — الـتـفـعـيـل : ( ${await db.get(`${member.id}enblep`)} )

3 — الأقـيـام : ( ${await db.get(`${member.id}gamep`)} )

4 — الـتـوظـيـف : ( ${await db.get(`job-${member.id}`)} )

5 — الـتـقـاعـد : ( ${await db.get(`${member.id}UnJob`)} )

6 — الاسـتـثـنـائـيـة : ( ${await db.get(`${member.id}addp`)} )

— اجـمـالـي الـنـقـاط : ( ${await db.get(`${member.id}tieketp`)+ await db.get(`${member.id}addp`) + await db.get(`${member.id}gamep`)+ await db.get(`${member.id}enblep`) +await db.get(`job-${member.id}`) + await db.get(`${member.id}UnJob`) } ) . **__`)}})

client.on(`messageCreate`, async message =>{
      let filter = user => user.author.id == message.author.id;
  if (message.content.startsWith(`-سجن`)){
if (message.guild.id !== `1144928711318179860` ) return
     if (!message.member.roles.cache.has(`1175886712833060914`))
  if (!message.member.roles.cache.has(`1175886742239330326`))
    if(!message.member.permissions.has("Administrator")) return message.channel.send(`**لا يـوجـد لـديـك صـلاحـيـات**`)
  const guild = client.guilds.cache.get(`1144928711318179860`)
const role = guild.roles.cache.get(`1175886941686870088`)// رتبت باند
const member = message.mentions.members.first()
if (!member) return message.channel.send(`**__. <:pp449:1173072675409760306> – عـزيـزي الإداري .

<:GulF8:1257757864664109127>  -  الـرجـاء مـنـك تـحـديـد الـعـضـو.

( وشـكـرآ لـك )__**`)
let buttonse = new  Discord.EmbedBuilder()
  .setTitle(`𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺`)

    .setDescription(`**__ الإداري : ${message.author}

حـدد اذا كـنـت تـريـد سـجـن الـعـضـو او إزالـة الـسـجـن

سـيـتـم تـطـبـيـق الـخـيـارات عـلـى الـعـضـو : ${member}__**`)
    .setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/1176357444180525217/1257844009460826122/-removebg-preview.png?ex=6685e205&is=66849085&hm=0ed81237522443928b20492b645f60508b3844f6420969f0518416c413194e9a&`)
      .setColor("#010101")
let buttons = new Discord.ActionRowBuilder().addComponents(
                new Discord.ButtonBuilder()
                .setStyle(Discord.ButtonStyle.Danger) 
                .setLabel('سـجـن')
      .setCustomId(`${message.id}1${message.author.id}`),
                  new Discord.ButtonBuilder()
                 .setStyle(Discord.ButtonStyle.Success) 
                .setLabel('فـك الـسـجـن')
          .setCustomId(`${message.id}2${message.author.id}`))
  message.channel.send({embeds:[buttonse],components:[buttons]})
.then(sgn =>{
client.on('interactionCreate', async interaction => {
const buttonID = interaction.customId
 if (interaction.user.id != message.author.id) return
  if (buttonID ===`${message.id}1${message.author.id}`) {
    sgn.edit({content:`**__سـبـب سـجـن الـعـضـو؟__**`, embeds:[], components:[]})
       message.channel.awaitMessages({filter : filter,  max:1 , errors: ["time"] }).catch(err => console.log(err)).then(async s1=>{
         s1.first().delete().catch(error => {
	if (error.code !== 10008) {
		console.error('Failed to delete the message:', error);
	}
});         
         sgn.edit({content : `**__مـاهـي الـعـقـوبـه؟__**`,embeds:[], components:[]})
          message.channel.awaitMessages({filter : filter,  max:1 , errors: ["time"] }).catch(err => console.log(err)).then(async s2=>{
             s2.first().delete().catch(error => {
	if (error.code !== 10008) {
		console.error('Failed to delete the message:', error);
	}
});         
 sgn.edit({content: `**__هـل يـوجـد دلـيـل؟__**`,embeds:[], components:[]})
             message.channel.awaitMessages({filter : filter,  max:1 , errors: ["time"] }).catch(err => console.log(err)).then(async s3=>{
 s3.first().delete().catch(error => {
	if (error.code !== 10008) {
		console.error('Failed to delete the message:', error);
	}
});          
let dsgn = new  Discord.EmbedBuilder()
  .setTitle(`𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺`)

    .setDescription(`__**تـم سـجـن الـعـضـو بـنـجـاح : ${member}

— الـمـسـؤول : ${message.author}**__`)
    .setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/1176357444180525217/1257844009460826122/-removebg-preview.png?ex=6685e205&is=66849085&hm=0ed81237522443928b20492b645f60508b3844f6420969f0518416c413194e9a&`)
      .setColor("#010101")
 member.roles.remove(member.roles.cache).catch(err => console.log(err)) 
       sgn.edit({content:` ` , embeds:[dsgn]})     
              await db.push(`ban`,`${member.id}`)   
  await db.set(`${member.id}sbb` , s1.first().content )
  await db.set(`${member.id}3gobh` , s2.first().content )               
  await db.set(`${member.id}dldyd` , s3.first().content ) 
               client.channels.cache.get(`1185159084744396820`).send({content :
` __**زنـزانـة حـلـم الـخـلـيـج .

— الـمـخـالـف : ( ${member} )

— الـسـبـب : ( ${s1.first().content} )

— الـعـقـوبـة : ( ${s2.first().content} )

— هـل يـوجـد دلـيـل : ( ${s3.first().content} )

— الـمـسـؤول : ( ${message.author} )

- الـرجـاء ارفـاق الادلـة : ( ${message.author} )

- <@&1175886742239330326> 
- <@&1175886712833060914> **__`}).catch(err => console.log(err))
         member.setNickname(`${s1.first().content}/${s2.first().content}`).catch(err => console.log(err))    
let logg = new  Discord.EmbedBuilder()
  .setTitle(`𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺`)

    .setDescription(`__**— تـم سـجـن الـعـضـو ${member} 

— الـمـسـؤول ${message.author} **__`)
    .setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/1176357444180525217/1257844009460826122/-removebg-preview.png?ex=6685e205&is=66849085&hm=0ed81237522443928b20492b645f60508b3844f6420969f0518416c413194e9a&`)
      .setColor("#010101")
  client.channels.cache.get(`1175887540616700056`).send({embeds:[logg]})
               .then(() => {
              setTimeout(() => {
                   member.roles.add(role).catch(err => console.log(err))
              }, 3000);
            });   
          })})})}})    
client.on('interactionCreate', async interaction =>  {
      
const buttonID = interaction.customId
 if (interaction.user.id != message.author.id) return
  if (buttonID ===`${message.id}2${message.author.id}`) {
  const guild = client.guilds.cache.get(`1144928711318179860`);
const role = guild.roles.cache.get(`1175886941686870088`)// رتبت باند
const role1 = guild.roles.cache.get(`1175886940722180187`)// رتبت غير مفعل
let logg = new  Discord.EmbedBuilder()
  .setTitle(`𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺`)
    .setDescription(`__**— تـم فـك سـجـن الـعـضـو ${member} 

— الـمـسـؤول ${message.author} **__`)
    .setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/1176357444180525217/1257844009460826122/-removebg-preview.png?ex=6685e205&is=66849085&hm=0ed81237522443928b20492b645f60508b3844f6420969f0518416c413194e9a&`)
      .setColor("#010101")
  client.channels.cache.get(`1175887540616700056`).send({embeds:[logg]})
let dsgn = new  Discord.EmbedBuilder()
  .setTitle(`𝗚𝘂𝗹𝗙 𝗗𝗿𝗲𝗮𝗺`)
    .setDescription(`
> __**الـمـسـؤول : ${message.author}**__

تـم إزالـة الـمـخـالـف عـن الـعـضـو بـنـجـاح : ${member}
  `)
    .setTimestamp()
.setThumbnail(`https://cdn.discordapp.com/attachments/1176357444180525217/1257844009460826122/-removebg-preview.png?ex=6685e205&is=66849085&hm=0ed81237522443928b20492b645f60508b3844f6420969f0518416c413194e9a&`)
      .setColor("#010101")
      await db.pull(`ban`,`${member.id}`)
     member.setNickname(``).catch(err => console.log(err))
      sgn.edit({embeds:[dsgn],components:[]}).catch(err => console.log(err))
member.roles.add(role1).catch(err => console.log(err)) 
     // member.roles.add(role2).catch(err => console.log(err)) 
//member.roles.add(role3).catch(err => console.log(err)) 
member.roles.remove(role).catch(err => console.log(err)) }})})}})
client.on('guildMemberAdd', async member => {
  const guild = client.guilds.cache.get(`1144928711318179860`);
const role = guild.roles.cache.get(`1175886941686870088`)// رتبت باند
const role1 = guild.roles.cache.get(`1175886940722180187`)// رتبت غير مفعل
    let moses2 =  await db.get(`ban`) || []
  if (moses2.includes(`${member.id}`)){
    member.setNickname(`مسجون سابقا`).catch(err => console.log(err))
     member.roles.remove(member.roles.cache).catch(err => console.log(err)) 
      client.channels.cache.get(`1242108085976432640`).send(`__**رقـابـة قـولـف الـتـلـقـائـيـة .

— الـمـخـالـف : ${member}

— الـسـبـب : ${ await db.get(`${member.id}sbb`)}

— الـعـقـوبـة : ${await db.get(`${member.id}3gobh`)} **__`).catch(err => console.log(err))
setTimeout(() => {
                 member.roles.add(role).catch(err => console.log(err))
                member.roles.remove(role1).catch(err => console.log(err))}, 3000);}})