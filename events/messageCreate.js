export const messageCreate = async (message) => {
    if (message.content === '!setupTicket') {
        const setupMessage = await message.channel.send({
            embeds: [{
                color: 0x0099ff,
                title: 'Appeal',
                description: 'To open an appeal, react with 📩.',
            }]
        });
        await setupMessage.react('📩');
    }
}