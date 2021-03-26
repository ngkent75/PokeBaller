const Pokemon = require('./Pokemon');
const User = require('./User');

User.hasMany(Pokemon);

Pokemon.belongsToMany(User, { foreignKey: 'user_id' });

module.exports = { Pokemon, User };


/*

User hasOne Collection

Collection has many Pokemon


Should we have a System User that has all Pokemon?




*/