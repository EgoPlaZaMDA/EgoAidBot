export const closeTicket = async (interaction) => {
  const thread = interaction.channel;

  if (!interaction.member.roles.cache.some(role => role.name === 'Moderator')) {
      await interaction.reply({ content: 'You do not have permission to close this ticket.', ephemeral: true });
      return;
  }

  await thread.send({
      embeds: [{
          color: 0xffcc00,
          description: `**Ticket Closed by <@${interaction.user.id}>**`
      }]
  });
  await thread.setLocked(true);
  await thread.setArchived(true);
};
