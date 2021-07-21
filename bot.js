const Discord = require("discord.js");
const client = new Discord.Client();
const jimp = require ('jimp')
const prefix = 'y;';
const fs = require('fs');


const config = require("./config.json");
const memberCounter = require("./member-counter.js");
const modLogs = require ("./mod-logs")
const permissions = config.permissions

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}


client.on("ready", () => {
    console.log(`Bot foi iniciado`);
    memberCounter(client)
    client.user.setStatus("dnd")
    client.user.setActivity(`Para pedir ajuda use y;help`);
});



client.on("message", async message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    //
    //comandos de Moderação
    //

  if(command === 'teste'){
      const guild = client.guilds.cache.get('845480610180890634');
      let canal = guild.channels.cache.get("846620964929929246");
      const member = message.mentions.users.first();

      var list = [
          'https://i.imgur.com/QnL2ZHN.gif',
          'https://i.imgur.com/6RAeSJZ.gif',
          'https://i.imgur.com/0qIGt6s.gif',
          'https://i.imgur.com/Bi6DE9r.gif'
        ];
      
        var rand = list[Math.floor(Math.random() * list.length)];
      if(member){
          const memberTarget = message.guild.members.cache.get(member.id)
          memberTarget.ban();
          let pessoa = message.mentions.users.first()
          if (!pessoa) return message.channel.send(`:x: |!`);
          let ban = new Discord.MessageEmbed()
          .setTitle(`⛔️ Punido ⛔️`)
          .setDescription(`:x: ${message.author} baniu ${pessoa} do servidor! Nisso que dá não seguir as regras...`)
          .setImage(rand)
          .setTimestamp()
          .setColor("RED")
          .setThumbnail(message.author.displayAvatarURL({format:"png"}))
          .setFooter(`Yürei Staff`, message.author.displayAvatarURL({format:"png"}));
        
          message.channel.send(ban);

          let banlog = new Discord.MessageEmbed()
          .setTitle('⛔️ Usuário Banido ⛔️')
          .setDescription(`${pessoa} Foi banido do servidor por ${message.author}.`)
          .setThumbnail('https://cdn.discordapp.com/attachments/782104404445626430/850551903389089802/icon.png')
          .setFooter(`Yürei Server | Mod Auto log `, message.author.displayAvatarURL({format:"png"}));
          canal.send(banlog)
}
  }

  else if(command === ''){
    client.commands.get('').execute(message, args);
  }  


    //
    //comandos sociais
    //

  else if(command === 'kiss'){
    client.commands.get('kiss').execute(message, args);
  }
  else if(command === 'ship'){
    client.commands.get('ship').execute(message, args);
  }
  else if(command === 'hug'){
    client.commands.get('hug').execute(message, args);
  }
  else if(command === 'slap'){
    client.commands.get('slap').execute(message, args);
  }
  else if(command === 'help'){
    client.commands.get('help').execute(message, args);
  }  
  else if(command === 'pat'){
    client.commands.get('pat').execute(message, args);
  }
});

client.on("guildMemberAdd", async member =>{
  const guild = client.guilds.cache.get('845480610180890634');

  let canal = guild.channels.cache.get("846608923795652648");
  let mask = await jimp.read('mascara.png');
  let avatar = member.user.displayAvatarURL({format: "png"});
  let fundo = await jimp.read('fundo.png');

  jimp.read(avatar).then(avatar => {
      avatar.resize(240, 240)
      mask.resize(240, 240)
      avatar.mask(mask)
      fundo.composite(avatar,391, 19).write('bemvindo.png')
      canal.send(`${member}`, { files: ["bemvindo.png"]})
    
      console.log('Imagem enviada para o discord')
  })
  .catch(err => {
    console.log('erro ao carregar a imagem')
  })
})


client.login(config.token);