const discord = require('discord.js')
const pagination = require('discord.js-pagination')

module.exports = {
    name: 'help',
    description: "Ajuda os membros com duvida",
    execute(message, args){
        if (message.channel.id === "846608923795652648") return;
        const page1 = new discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle('🥳 **| Comando de ajuda!**')
        .setThumbnail('https://cdn.discordapp.com/attachments/782104404445626430/850551903389089802/icon.png')
        .setDescription("**Oii, precisando de uma ajudinha?? Só passar para a proxima página reagindo no emoji abaixo para mais informações dos comandos.**")
        .setImage('https://cdn.discordapp.com/attachments/782104404445626430/852055992434688030/comandos.png')
        .setFooter(`Yürei Server`, message.author.displayAvatarURL({format:"png"}));

        const page2 = new discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle('🥳 **| A ajuda chegou!** ')
        .setDescription(`**Olá novamente ${message.author}! Aqui está a ajuda que eu te prometi! S2**`)
        .addFields(
            { name: '🛠**UTILIDADE**', value: '`Comandos de utilidade ainda em desenvolvimento`'},
            { name: '🛠**DIVERSÃO**', value: '`y;kiss`, `y;hug`, `y;slap`'}
        )
        .setImage('https://cdn.discordapp.com/attachments/782104404445626430/852055992434688030/comandos.png')
        .setFooter(`Yürei Server`, message.author.displayAvatarURL({format:"png"}));

        const pages = [
            page1,
            page2
        ]

        const emoji = ["⏪", "⏩"]

        const timeout = '100000'

        pagination(message, pages, emoji, timeout)
    }
}