const sequelize = require('../config/connection');
const seedPokemon = require('./pokemon.js');
const seedUser = require('./user.js');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPokemon();

  await seedUser();

  process.exit(0);
};

seedAll();