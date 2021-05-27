const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PokemonUserWish extends Model { }

PokemonUserWish.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            },
        },
        pokemon_id: {
            type: DataTypes.STRING,
            references: {
                model: 'pokemon',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokemon_user',
    }
);



module.exports = PokemonUserWish;