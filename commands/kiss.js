module.exports = {
    name: 'kiss',
    description: "Espalha o amor!",
    execute(message, args){
        const Discord = require("discord.js");
        const member = message.mentions.users.first();
        var list = [
            'https://i.imgur.com/9KfZ4Xg.gif',
            'https://i.imgur.com/nezYlx1.gif',
            'https://i.imgur.com/qALwmUW.gif',
            'https://i.imgur.com/sGVgr74.gif',
            'https://i.imgur.com/Yjk1OQF.gif',
            'https://i.imgur.com/i1PIph3.gif'
          ];
        
          var rand = list[Math.floor(Math.random() * list.length)];
        if(member){
            let pessoa = message.mentions.users.first() || client.users.cache.get(args[0]);
          
            if (!pessoa) return message.channel.send(`:x: | ${message.author} Mencione alguém para beijar!`);
            if(member === message.author) return message.channel.send(':x: | Você não pode se beijar! Bobinho')
        
            let kiss = new Discord.MessageEmbed()
            .setTitle(`💋 Que lindoo 😘`)
            .setDescription(`💓 ${message.author} beijou ${pessoa}! Eu shipo... :rose:`)
            .setImage(rand)
            .setTimestamp()
            .setColor("BLUE")
            .setThumbnail(message.author.displayAvatarURL({format:"png"}))
            .setFooter(`Yürei Server`, message.author.displayAvatarURL({format:"png"}));
          
            message.channel.send(kiss) 
        }else{
            message.channel.send(':x: | Mencione alguém para beijar!');

        }
    }
}