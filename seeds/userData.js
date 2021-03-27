const { User } = require('../models');

const userData=[
  {
    "username": "Sal",
    "email": "sal@hotmail.com",
    "password": "password12345"
  },
  {
    "username": "Lernantino",
    "email": "lernantino@gmail.com",
    "password": "password12345"
  },
  {
    "username": "Sommer",
    "email": "sommertimefun@aol.com",
    "password": "password12345"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;


