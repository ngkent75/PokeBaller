const { Pokemon } = require('../models');

const pokemonData = [
    {
        "name": "Venusaur V",
        "images": "https://images.pokemontcg.io/swsh35/1_hires.png",
        "rarity": "Rare Holo V",
        "id": "swsh35-1"
    },
    {
        "name": "Banette",
        "images": "https://images.pokemontcg.io/ex14/1_hires.png",
        "rarity": "Rare Holo",
        "id": "ex14-1"
    },
    {
        "name": "Tangela",
        "images": "https://images.pokemontcg.io/xy11/1_hires.png",
        "rarity": "Common",
        "id": "xy11-1"
    },
    {
        "name": "Azumarill",
        "images": "https://images.pokemontcg.io/hgss1/2_hires.png",
        "rarity": "Rare Holo",
        "id": "hgss1-2"
    },
    {
        "name": "Venusaur & Snivy-GX",
        "images": "https://images.pokemontcg.io/sm12/1_hires.png",
        "rarity": "Rare Holo GX",
        "id": "sm12-1"
    }
]

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;