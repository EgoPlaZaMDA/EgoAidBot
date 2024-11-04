import { createTicket } from '../commands/createTicket.js';
import { closeTicket } from '../commands/closeTicket.js';

export const interactionCreate = async (interaction) => {
    if (!interaction.isCommand() && !interaction.isButton()) return;

    if (interaction.isCommand()) {
        const { commandName } = interaction;
        console.log(`Command received: ${commandName}`);

        if (commandName === 'ticket') {
            await createTicket(interaction);
        }
    }

    if (interaction.isButton()) {
        const thread = interaction.channel;
        console.log(`Button pressed: ${interaction.customId}`);

        if (interaction.customId === 'predefined_1') {
            await thread.send('Thank you for your appeal, your request has been successfully processed.');
        }

        if (interaction.customId === 'predefined_2') {
            await thread.send('The player has been successfully punished. Thanks for the report! 🌧️');
        }

        if (interaction.customId === 'predefined_3') {
            await thread.send('Your appeal has been received and is under review.');
        }

        if (interaction.customId === 'reject') {
            await thread.send('Your appeal does not contain the necessary information. Please provide more details or complete your request.');
        }

        if (interaction.customId === 'incomplete') {
            await thread.send('Your report is incomplete. Please provide unaltered evidence.');
        }

        if (interaction.customId === 'close') {
            await closeTicket(interaction);
        }

        await interaction.deferUpdate();
    }
}