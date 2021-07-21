module.exports = {
    name: 'ban',
    description: "Bane membros malvados do servidor!",
    execute(message, client, args){
        const Discord = require("discord.js");
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
        }

    }
}