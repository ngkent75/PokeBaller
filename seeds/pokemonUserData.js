const { PokemonUser } = require('../models');

const pokemonUserData = [
    {
        "user_id": "1",
        "pokemon_id": "swsh35-1",
        "list":"collection"
    },
    {
        "user_id": "1",
        "pokemon_id": "ex14-1",
        "list":"wishlist"
    },
    {
        "user_id": "2",
        "pokemon_id": "swsh35-1",
        "list":"wishlist"
    },
    {
        "user_id": "2",
        "pokemon_id": "xy11-1",
        "list":"collection"
    },
    {
        "user_id": "3",
        "pokemon_id": "xy11-1",
        "list":"wishlist"
    },
    {
        "user_id": "3",
        "pokemon_id": "hgss1-2",
        "list":"wishlist"
    },
    {
        "user_id": "3",
        "pokemon_id": "sm12-1",
        "list":"collection"
    }
]

const seedPokemonUser = () => PokemonUser.bulkCreate(pokemonUserData);

module.exports = seedPokemonUser;