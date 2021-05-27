const User = require('./User');
const Pokemon = require('./Pokemon');
const PokemonUser = require('./PokemonUser');
const PokemonUserWish = require('./PokemonUserWish');

Pokemon.belongsToMany(User, { through: PokemonUser, foreignKey: 'pokemon_id' });

User.belongsToMany(Pokemon, { through: PokemonUser, foreignKey: 'user_id' });

// Pokemon.belongsToMany(User, { through: PokemonUserWish, foreignKey: 'pokemon_id' });

// User.belongsToMany(Pokemon, { through: PokemonUserWish, foreignKey: 'user_id' });

module.exports = { Pokemon, User, PokemonUser };