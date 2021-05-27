const User = require('./User');
const Pokemon = require('./Pokemon');
const PokemonUser = require('./PokemonUser');

// const PokemonUserWishlist = require('./PokemonUserWishlist.js');


Pokemon.belongsToMany(User, { through: PokemonUser, foreignKey: 'pokemon_id' });

User.belongsToMany(Pokemon, { through: PokemonUser, foreignKey: 'user_id' });


// Pokemon.belongsToMany(User, { through: PokemonUserWishlist, foreignKey: 'pokemon_id' });

// User.belongsToMany(Pokemon, { through: PokemonUserWishlist, foreignKey: 'user_id' });

module.exports = { Pokemon, User, PokemonUser };