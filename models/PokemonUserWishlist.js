// const { Model, DataTypes } = require('sequelize');

// const sequelize = require('../config/connection');

// class PokemonUserWishlist extends Model { }

// // TODO future development - bring back referential integrity

// PokemonUserWishlist.init(
//     {
//         id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             primaryKey: true,
//             autoIncrement: true,
//         },
//         user_id: {
//             type: DataTypes.INTEGER
//             // ,
//             // references: {
//             //     model: 'user',
//             //     key: 'id',
//             // },
//         },
//         pokemon_id: {
//             type: DataTypes.STRING
//             // ,
//             // references: {
//             //     model: 'pokemon',
//             //     key: 'id',
//             // },
//         },
//     },
//     {
//         sequelize,
//         timestamps: false,
//         freezeTableName: true,
//         underscored: true,
//         modelName: 'pokemon_user_wishlist',
//     }
// );


// module.exports = PokemonUserWishlist;