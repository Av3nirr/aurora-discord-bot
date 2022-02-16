const { Interaction, MessageEmbed, Client } = require('discord.js');
const { ticketChannel } = require('../config.json')

module.exports = {
    /**
     * 
     *  @param {Client} client
     * @param {Interaction} interaction 
     */
    async execute(client, interaction) {
        var ticket = interaction.guild.channels.cache.get(ticketChannel)
        const embed = new MessageEmbed()
            .setTitle("Message d'aide: Commandes Utiles")
            .setColor("PURPLE")
            .setDescription("Voici la liste de toutes le commandes utiles du bot")
            .setFooter({
                text: "Aurora Bot"
            })
            .addField("__/help__", "Affiche le message d'aide principal !")
            .addField('__/ping__', "Affiche le temps de réponse du bot !")
            .addField('<#' + ticketl + '>', "Créer un ticket pour contacter le staff !")
            .setTimestamp()
        await interaction.reply({embeds: [embed]})
    }

}