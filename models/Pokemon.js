const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,   //public\images\sample_card.png
      defaultValue: 'public\images\sample_card.png', //is this right? make it relative to somewhere else?
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
  }
);

module.exports = Pokemon;