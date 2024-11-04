export const closeTicket = async (interaction) => {
  const thread = interaction.channel;
  await thread.send({
      embeds: [{
          color: 0xffcc00,  // Left border color
          description: `**Ticket Closed by <@${interaction.user.id}>**`
      }]
  });
  await thread.setLocked(true);
  await thread.setArchived(true);
}