const { PokemonUser } = require('../models');

const pokemonUserWishData = [
    {
        "user_id": "1",
        "pokemon_id": "swsh35-2"
    },
    {
        "user_id": "1",
        "pokemon_id": "ex14-2"
    },
    {
        "user_id": "2",
        "pokemon_id": "swsh35-2"
    },
    {
        "user_id": "2",
        "pokemon_id": "xy11-2"
    },
    {
        "user_id": "3",
        "pokemon_id": "xy11-2"
    },
    {
        "user_id": "3",
        "pokemon_id": "hgss1-3"
    },
    {
        "user_id": "3",
        "pokemon_id": "sm12-2"
    }
]

const seedPokemonUserWish = () => PokemonUser.bulkCreate(pokemonUserWishData);

module.exports = seedPokemonUserWish;