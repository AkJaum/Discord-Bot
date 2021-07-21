module.exports = async (client) => {
    const guild = client.guilds.cache.get('845480610180890634');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('852960973384187914')
        channel.setName(`Membros: ${memberCount.toLocaleString()} `)
        console.log('Updating Member Count');
    }, 18000);
}