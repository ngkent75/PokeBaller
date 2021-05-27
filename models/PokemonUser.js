const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PokemonUser extends Model { }

PokemonUser.init(
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
        list: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue:'collection',
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



module.exports = PokemonUser;