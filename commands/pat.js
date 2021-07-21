module.exports = {
    name: 'pat',
    description: "Espalha o amor!",
    execute(message, args){
        const Discord = require("discord.js");
        const member = message.mentions.users.first();
        var list = [
            'https://i.imgur.com/PkE5aV3.gif',
            'https://i.imgur.com/cqIJIh4.gif',
            'https://i.imgur.com/qLMydij.gif',
            'https://i.imgur.com/g7uHgRA.gif',
            'https://i.imgur.com/omfVVse.gif',
            'https://i.imgur.com/80Ai9Qc.gif'
          ];
        
          var rand = list[Math.floor(Math.random() * list.length)];
        if(member){
            let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
          
            if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para fazer carinho!`);
            if(member === message.author) return message.channel.send(':x: | Você não pode se fazer carinho! Bobinho')
        
            let pat = new Discord.MessageEmbed()
            .setTitle(`💋 Que lindoo 😘`)
            .setDescription(`💓 ${message.author} fez carinho ${pessoa}! :rose:`)
            .setImage(rand)
            .setTimestamp()
            .setColor("BLUE")
            .setThumbnail(message.author.displayAvatarURL({format:"png"}))
            .setFooter(`Yürei Server`, message.author.displayAvatarURL({format:"png"}));
          
            message.channel.send(pat) 
        }else{
            message.channel.send(':x: | Mencione alguém para fazer carinho!');

        }
    }
}