const Pokemon = require('./Pokemon');
const User = require('./User');

User.hasMany(Pokemon, {});

Pokemon.belongsToMany(User, { through: 'User_Pokemon' });

module.exports = { Pokemon, User };