const { Interaction, MessageEmbed, Client } = require('discord.js');


module.exports = {
    /**
     * 
     *  @param {Client} client
     * @param {Interaction} interaction 
     */
    async execute(client, interaction) {
        await interaction.reply({content: "salut"})
    }

}