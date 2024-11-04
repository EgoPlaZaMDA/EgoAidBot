export const memberLeave = async (member) => {
    const channels = member.guild.channels.cache.filter(channel => 
        channel.isThread() && 
        !channel.archived && 
        (channel.name.startsWith('ticket-appeal-') || channel.name.startsWith('ticket-report-'))
    );

    channels.forEach(async (thread) => {
        const owner = thread.name.split('-')[2]; 

        if (owner === member.user.username) {
            await thread.send({
                embeds: [{
                    color: 0xff0000,  // Red color to indicate the ticket is closed due to user leaving
                    description: `**Ticket Closed: User <@${member.user.id}> has left the server**`
                }]
            });
            await thread.setLocked(true);
            await thread.setArchived(true);
        }
    });
}