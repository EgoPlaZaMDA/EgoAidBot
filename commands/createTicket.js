import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const createTicket = async (interaction) => {
    const thread = await interaction.channel.threads.create({
        name: `ticket-${interaction.user.username}`,
        autoArchiveDuration: 60,
        reason: 'Ticket thread',
    });

    const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('predefined_1')
                .setLabel('Predefined 1')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('predefined_2')
                .setLabel('Predefined 2')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('predefined_3')
                .setLabel('Predefined 3')
                .setStyle(ButtonStyle.Primary),
            new ButtonBuilder()
                .setCustomId('reject')
                .setLabel('Reject')
                .setStyle(ButtonStyle.Danger),
            new ButtonBuilder()
                .setCustomId('incomplete')
                .setLabel('Incomplete')
                .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
                .setCustomId('close')
                .setLabel('Close Ticket')
                .setStyle(ButtonStyle.Secondary)
        );

    await thread.send({
        content: `Hello <@${interaction.user.id}>, how can we assist you today?`,
        components: [row]
    });

    await interaction.reply({ content: 'Ticket created!', ephemeral: true });
}