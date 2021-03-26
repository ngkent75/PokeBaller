const Pokemon = require('./Pokemon');
const Collection = require('./Collection');
const User = require('./User');

User.hasOne(Collection);

Collection.belongsTo(User, { foreignKey: 'user_id' });

Collection.hasMany(Pokemon, { foreignKey: 'collection_id' });

Pokemon.belongsTo(Collection, { foreignKey: 'collection_id' });

module.exports = { Pokemon, Collection, User };