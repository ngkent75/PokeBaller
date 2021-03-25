const { Model, DataTypes, INTEGER } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supertype: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    subtypes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    evolvesFrom: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    abilities: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attacks: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    weaknesses: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    retreatCost: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    convertedRetreatCost: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    artist: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavorText: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    nationalPokedexNumbers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    legalities: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    wishList: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokemon',
  }
);

module.exports = Pokemon;