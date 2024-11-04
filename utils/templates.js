export const followUp = async (client) => {
  const channels = client.channels.cache.filter(channel => 
      channel.isThread() && 
      !channel.archived && 
      channel.name.startsWith('ticket-')
  );

  for (const [id, thread] of channels) {
      const messages = await thread.messages.fetch({ limit: 1 });
      const lastMessage = messages.first();
      const now = Date.now();
      const inactivityLimit = 1000 * 60 * 2; // 2 minutos

      if (now - lastMessage.createdTimestamp > inactivityLimit) {
          const userId = lastMessage.author.id;
          await thread.send(`Hello <@${userId}>, this ticket has been closed due to inactivity. Please open a new ticket if the issue persists.`);
          
          await thread.setLocked(true); 
          await thread.setArchived(true); 
      }
  }
}