# EgoAidBot

EgoAidBot is a versatile Discord bot designed to streamline support by managing tickets, providing quick responses, and ensuring no query goes unanswered.

## Features

- **Thread-Based Tickets:** Users can create support tickets as threads, keeping the main channels clean and organized.
- **Interactive Buttons:** Includes buttons for common actions like rejecting or marking a ticket as incomplete.
- **Predefined Responses:** Quickly reply to common queries with predefined response templates.
- **Follow-Up Notifications:** Automatically reminds moderators of unresolved tickets after a specific period.
- **Auto Closure for Inactivity:** Tickets are automatically closed after a set period of inactivity, notifying the user of the closure.
- **Departed User Management:** Automatically closes tickets for users who leave the server, notifying them accordingly.
- **Internal Notes:** Allows moderators to add internal notes to tickets for better context and decision-making.

## Commands

- `!setupTicket`: Sends a message that users can react to in order to create a support ticket.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/EgoAidBot.git
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
2. Users can react with 📩 to create a new support thread.
3. Use the interactive buttons within the thread for various actions like sending predefined responses, rejecting, or marking tickets as incomplete.

## Contributing

Feel free to fork the project and submit pull requests. All contributions are welcome!
