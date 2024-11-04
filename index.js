import { Client, GatewayIntentBits, Partials } from 'discord.js';
import 'dotenv/config';
import { interactionCreate } from './events/interactionCreate.js';
import { messageCreate } from './events/messageCreate.js';
import { messageReactionAdd } from './events/messageReactionAdd.js';
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
client.on('messageCreate', messageCreate);
client.on('messageReactionAdd', messageReactionAdd);

setInterval(() => followUp(client), 1000 * 60); // Ejecutar cada minuto

client.login(process.env.BOT_TOKEN);