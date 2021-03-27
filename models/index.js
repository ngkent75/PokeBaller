const User = require('./User');
const Pokemon = require('./Pokemon');
const PokemonUser = require('./PokemonUser');

Pokemon.belongsToMany(User, { through: PokemonUser, foreignKey: 'pokemon_id' });

User.belongsToMany(Pokemon, { through: PokemonUser, foreignKey: 'user_id' });


module.exports = { Pokemon, User, PokemonUser };