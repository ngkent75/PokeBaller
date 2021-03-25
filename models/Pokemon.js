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
    level: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    types: {
      type: DataTypes.STRING,
      allowNull: false,
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
      allowNull: false,
    },
    weaknesses: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    convertedRetreatCost: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flavorText: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    rarity: {
      type: DataTypes.STRING,
      allowNull: false,
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