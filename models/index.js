const Pokemon = require('./Pokemon');
const User = require('./User');
const PokemonUser = require('./PokemonUser');

Pokemon.belongsToMany(User, { through: PokemonUser, foreignKey: 'pokemon_id' });

User.belongsToMany(Pokemon, { through: PokemonUser, foreignKey: 'user_id' });


module.exports = { Pokemon, User, PokemonUser };


/*

User hasOne Collection

Collection has many Pokemon


Should we have a System User that has all Pokemon?




*/