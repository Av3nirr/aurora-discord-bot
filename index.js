//import all settings
const { token } = require('./config.json')
//import libraries
const { Client, Intents } = require('./discord.js')

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
	if (interaction.isCommand()) handleCommand(client, interaction);
	if (interaction.isButton()){
        break;s
	}
})