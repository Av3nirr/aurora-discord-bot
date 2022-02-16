const { SlashCommandBuilder} = require('@discordjs/builders');
const { CommandInteraction, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');


module.exports = {
    data: 
    new SlashCommandBuilder()
    .setName('help')
    .setDescription('Affiche le message d\'aide du bot Aurora !'),
    /**
     * 
     * @param {CommandInteraction} interaction 
     */
    async execute(interaction) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('utiliti')
					.setLabel('Utiles')
                    .setEmoji('😆')
					.setStyle('PRIMARY'),
			)
            .addComponents(
				new MessageButton()
					.setCustomId('admin')
					.setLabel('Admin')
                    .setEmoji('🚨')
					.setStyle('PRIMARY'),
			)
            .addComponents(
				new MessageButton()
					.setCustomId('other')
					.setLabel('Autres')
                    .setEmoji('❓')
					.setStyle('PRIMARY'),
			);
        const embed = new MessageEmbed()
            .setTitle("Message d'aide")
            .setColor("PURPLE")
            .setDescription("Quel catégorie d'aide veux-tu ?")
            .setFooter({
                text: "Aurora Bot"
            })
            .setTimestamp()
        await interaction.reply({embeds: [embed], components: [row]})
    }

}