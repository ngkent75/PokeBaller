const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
const seedPokemon = require('./pokemon.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  
  await seedPokemon();

  process.exit(0);
};

seedDatabase();