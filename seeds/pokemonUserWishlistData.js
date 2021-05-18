const { PokemonUserWishlist } = require('../models');

const pokemonUserWishListData = [
    {
        "user_id": "1",
        "pokemon_id": "xy11-1"
    },
    {
        "user_id": "2",
        "pokemon_id": "ex16-26"
    },
    {
        "user_id": "3",
        "pokemon_id": "hgss1-2"
    }
]

const seedPokemonUserWishlists = () => PokemonUserWishlist.bulkCreate(pokemonUserWishListData);

module.exports = seedPokemonUserWishlists;