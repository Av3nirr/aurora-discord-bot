//import all settings
const { token } = require('./config.json')
//import libraries
const { Client, Intents, Collection } = require('discord.js')
const fs = require('fs')

//import files and commands
const handleCommand = require('./handlers/command.js')

//create Instaces
const client = new Client({ intents: new Intents(32767)})

//registering commands
client.commands = new Collection();
const commandFIles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFIles){
	const command = require(`./commands/${file}`)
	client.commands.set(command.data.name, command)
}



//handling interractions
client.on('interactionCreate', async interaction => {
	if (interaction.isCommand()) console.log(interaction), handleCommand(client, interaction);
	if (interaction.isButton()){
	}
})



client.once('ready', async () => {
    console.info(`Bot connécté en tant que ${client.user.tag} !`)
})

client.login(token)