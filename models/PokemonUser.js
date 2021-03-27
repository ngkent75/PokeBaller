const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PokemonUser extends Model { }

PokemonUser.init(
    {
        pokemon_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'pokemon',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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

module.exports = PokemonUser;