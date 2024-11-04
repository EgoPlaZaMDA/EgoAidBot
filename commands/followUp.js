const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('follow_up')
    .setDescription('Sends a follow-up reminder in an inactive ticket'),
  async execute(interaction) {
    if (interaction.channel.isThread()) {
      await interaction.channel.send(`Reminder: This ticket has been open for 24 hours without a response. @${interaction.user.username}, please update as necessary.`);
    } else {
      await interaction.reply({ content: 'This command can only be used in a ticket thread.', ephemeral: true });
    }
  },
};