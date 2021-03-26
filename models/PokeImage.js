const { Model, DataTypes } = require('sequelize');
const { PokeImage } = require('.');
const sequelize = require('../config/connection');

class PokeImage extends Model {}

PokeImage.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pokemon_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "pokemon",
            key: "id"
        },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pokeimage',
  }
);

module.exports = PokeImage;