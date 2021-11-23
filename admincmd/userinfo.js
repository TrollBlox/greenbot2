const { SlashCommandBuilder } = require('@discordjs/builders')
const { Formatters } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('userinfo')
    .setDescription('gets full list of user info')
    .addStringOption(options =>
      options.setName('user_id')
        .setDescription('user id')
        .setRequired(true)),
  async execute(int, c) {
    const app = require('../app')
    const func = require('../resources/functions')

    const name = int.options.getString('user_id')
    const user = app.currency.get(id)
    func.log(`is looking at user <${id}>`, int, c);
    if (!user) return int.reply(Formatters.codeBlock(`${user.user_id} :: 
		not initialized`))
    return int.reply(Formatters.codeBlock(`${user.user_id} ::
		adventure: ${user.adventure}
		leaderboard: ${user.leaderboard}
		level: ${user.level}
		turn: ${user.turn}
		combat: ${user.combat}
		combat_target_id: ${user.comabt_target_id}
		combat_target: ${user.comabt_target}
		max_health: ${user.max_health}
		health: ${user.health}
		balance: ${user.balance}
		fish_exp: ${user.fish_exp}
		biggest_catch: ${user.biggest_catch}
		crime_exp: ${user.crime_exp}
		combat_exp: ${user.combat_exp}
		luck: ${user.luck}
		strength: ${user.strength}
		dexterity: ${user.dexterity}
		curse: ${user.curse}
		curse_time: ${user.curse_time}`))
  },
}