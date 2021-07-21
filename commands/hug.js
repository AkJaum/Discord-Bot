module.exports = {
    name: 'hug',
    description: "Espalha o amor!",
    execute(message, args){
        const Discord = require("discord.js");
        const member = message.mentions.users.first();
        var list = [
            'https://i.imgur.com/IAxUnda.gif',
            'https://i.imgur.com/FPznEhE.gif',
            'https://i.imgur.com/4ZmTqCd.gif',
            'https://i.imgur.com/GuADSLm.gif',
            'https://i.imgur.com/7DPuocI.gif'
          ];
        
          var rand = list[Math.floor(Math.random() * list.length)];
        if(member){
            let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
          
            if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para abraçar!`);
            if(member === message.author) return message.channel.send(':x: | Você não pode se abraçar! Bobinho')
        
            let hug = new Discord.MessageEmbed()
            .setTitle(`💋 Que lindoo 😘`)
            .setDescription(`💓 ${message.author} abraçou :people_hugging: ${pessoa}! :rose:`)
            .setImage(rand)
            .setTimestamp()
            .setColor("BLUE")
            .setThumbnail(message.author.displayAvatarURL({format:"png"}))
            .setFooter(`Yürei Server`, message.author.displayAvatarURL({format:"png"}));
          
            message.channel.send(hug) 
        }else{
            message.channel.send(':x: | Mencione alguém para abraçar!');

        }
    }
}