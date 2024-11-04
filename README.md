# EgoAidBot

EgoAidBot is a versatile Discord bot designed to streamline support by managing tickets, providing quick responses, and ensuring no query goes unanswered.

## Features

- **Custom Ticket Creation**: Users can open two types of tickets (appeals and reports) via specific reactions.
- **Custom Permissions**: Tickets are visible only to the user who created them and the moderators, who can manage the tickets and use interactive buttons.
- **Automatic Ticket Closure**: Tickets are automatically closed after 24 hours of inactivity.
- **Closure Upon Leaving Server**: If a user leaves the server, their ticket is automatically closed with a message explaining the reason.
- **Adding Internal Notes**: Moderators can add internal notes visible only to the moderation team, allowing for better communication and tracking of cases.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/EgoPlaZaMDA/EgoAidBot.git
    cd EgoAidBot
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up your environment variables in a `.env` file:
    ```env
    CLIENT_ID=your_client_id
    GUILD_ID=your_guild_id
    BOT_TOKEN=your_bot_token
    ```

4. Deploy the commands:
    ```sh
    node deploy-commands.js
    ```

5. Start the bot:
    ```sh
    node index.js
    ```

## Usage

1. Run the `!setupTicket` command in a channel where you want users to create tickets.
2. Users can react with 📩 to create an appeal thread or with 📨 to create a report thread.
3. Moderators can use the buttons within the thread for various actions, such as sending predefined responses, rejecting, marking tickets as incomplete, or closing the ticket.

## Commands

- `/ticket`: Creates a new support ticket.
- `/addInternalNote`: Adds an internal note to a ticket (only accessible by moderators).

## Known Issues

There are a few challenges that could not be fully overcome:
- **Reopening Tickets Automatically**: Automatically reopening tickets when a user returns to the server was not implemented. It is simpler for users to create a new ticket instead.
- **Adding Internal Notes**: This feature was partially implemented but could not be fully developed due to encountering the following error: "Error creating thread: TypeError: Cannot read properties of undefined (reading 'create')". Further debugging is required.

## Contributing

Feel free to fork the project and submit pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Project repository: [https://github.com/EgoPlaZaMDA/EgoAidBot](https://github.com/EgoPlaZaMDA/EgoAidBot)
