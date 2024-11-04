export const closeTicket = async (interaction) => {
  const thread = interaction.channel;
  await thread.send('This ticket has been closed by a moderator.');
  await thread.setLocked(true);
  await thread.setArchived(true);
}