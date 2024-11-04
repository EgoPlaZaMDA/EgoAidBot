export const closeTicket = async (interaction) => {
  const thread = interaction.channel;
  const userId = interaction.user.id;

  await thread.send({
      embeds: [{
          color: 0xffcc00,  // Left border color
          description: `**Ticket Closed by <@${userId}>**`
      }]
  });

  await thread.setLocked(true);
  await thread.setArchived(true);
}