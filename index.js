import { Client, GatewayIntentBits, Partials, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import 'dotenv/config';
import { createTicket } from './commands/createTicket.js';
import { interactionCreate } from './events/interactionCreate.js';
import { messageCreate } from './events/messageCreate.js';
import { followUp } from './utils/templates.js';

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.Channel,
        Partials.Reaction,
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', interactionCreate);

client.on('messageCreate', async (message) => {
    if (message.content === '!setupTicket') {
        const setupMessage = await message.channel.send({
            embeds: [{
                color: 0x0099ff,
                title: 'Appeal',
                description: 'To open an appeal, react with 📩.',
            }]
        });
        await setupMessage.react('📩');
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if (reaction.message.partial) await reaction.message.fetch();
    if (reaction.partial) await reaction.fetch();
    if (user.bot) return;

    console.log('Reaction detected:', reaction.emoji.name);

    if (reaction.message.embeds[0]?.description?.includes('To open an appeal, react with 📩.') && reaction.emoji.name === '📩') {
        console.log('Creating thread for user:', user.username);
        const thread = await reaction.message.channel.threads.create({
            name: `ticket-${user.username}`,
            autoArchiveDuration: 60,
            reason: 'Ticket thread',
        });

        const row1 = new ActionRowBuilder()
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
                    .setStyle(ButtonStyle.Primary)
            );

        const row2 = new ActionRowBuilder()
            .addComponents(
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
            content: `Hello <@${user.id}>, how can we assist you today?`,
            components: [row1, row2]
        });
    }
});

setInterval(() => followUp(client), 1000 * 60);

client.login(process.env.BOT_TOKEN);