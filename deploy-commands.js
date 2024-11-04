import { REST, Routes } from 'discord.js';
import 'dotenv/config';

const commands = [
    {
        name: 'ticket',
        description: 'Create a new support ticket',
    },
    // Add more commands here
];

const rest = new REST({ version: '9' }).setToken(process.env.BOT_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();