import { closeTicket } from '../commands/closeTicket.js';

export const memberLeave = async (member) => {
    const channels = member.guild.channels.cache.filter(channel => 
        channel.isThread() && 
        !channel.archived && 
        (channel.name.startsWith('appeal-') || channel.name.startsWith('report-'))
    );

    channels.forEach(async (thread) => {
        const threadOwner = thread.name.split('-')[1];

        if (threadOwner === member.user.username) {
            await thread.send({
                embeds: [{
                    color: 0xff0000,
                    description: `**Ticket Closed: User <@${member.user.id}> has left the server**. Please create a new ticket if you rejoin the server.`
                }]
            });
            await thread.setLocked(true);
            await thread.setArchived(true);
        }
    });
};