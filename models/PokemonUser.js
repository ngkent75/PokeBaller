const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PokemonUser extends Model { }

PokemonUser.init(
    {
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



module.exports = PokemonUser;