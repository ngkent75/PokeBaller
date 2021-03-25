const { Pokemon } = require('../models');
import pokemon from 'pokemontcgsdk'

pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' })

const pokemonData = [
  pokemon.card.all()
    .then((cards) => {
      for (let i = 0; i < 2; i++)
        console.log(cards[i]) // "Blastoise"
    })
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;