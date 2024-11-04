import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const messageReactionAdd = async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;

    console.log('Reaction detected:', reaction.emoji.name);

    if (reaction.emoji.name === '📩') {
        console.log('Creating appeal thread for user:', user.username);
        const thread = await reaction.message.channel.threads.create({
            name: `appeal-${user.username}`,
            autoArchiveDuration: 60,
            reason: 'Appeal thread',
        });

        const row1 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('reject')
                    .setLabel('Reject')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('predefined_1')
                    .setLabel('Appealed')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('close')
                    .setLabel('Close Ticket')
                    .setStyle(ButtonStyle.Danger)
            );

        await thread.send({
            content: `Hello <@${user.id}>, how can we assist you today?`,
            components: [row1]
        });
    }

    if (reaction.emoji.name === '📨') {
        console.log('Creating report thread for user:', user.username);
        const thread = await reaction.message.channel.threads.create({
            name: `report-${user.username}`,
            autoArchiveDuration: 60,
            reason: 'Report thread',
        });

        const row2 = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('incomplete')
                    .setLabel('Incomplete')
                    .setStyle(ButtonStyle.Secondary),
                new ButtonBuilder()
                    .setCustomId('predefined_2')
                    .setLabel('Punished')
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('close')
                    .setLabel('Close Ticket')
                    .setStyle(ButtonStyle.Danger)
            );

        await thread.send({
            content: `Hello <@${user.id}>, how can we assist you today?`,
            components: [row2]
        });
    }
}