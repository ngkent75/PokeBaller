const pokemon = require('pokemontcgsdk');
pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' });

const router = require('express').Router();
const { Pokemon, User, PokemonUser } = require('../../models');





router.get('/', async (req, res) => {
    try {
        const pokemonName = 'Charizard';
        const findAllPokemonByName = () => {
            pokemon.card.all({ q: `name:${pokemonName}` })
            .then((cards) => {
                res.status(200).json(cards.map(card => {
                    return {
                        name: card.name,
                        images: card.images.large,
                        rarity: card.rarity,
                        id: card.id,
                    }
                }))

            })
        };
        findAllPokemonByName();
    } catch (err) {
        res.status(500).json(err);
    }
});


const pokemonId = 'ex11-1';

module.exports = router;