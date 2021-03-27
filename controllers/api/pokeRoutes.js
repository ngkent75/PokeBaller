const pokemon = require('pokemontcgsdk');
pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' });
const shuffle = require('lodash.shuffle');

const router = require('express').Router();
const { Pokemon, User, PokemonUser } = require('../../models');




// GET all pokemon by name
router.get('/PokeName/:name', async (req, res) => {
    try {
        const pokemonName = 'Beedrill';
        const findAllPokemonByName = () => {
            pokemon.card.all({ q: `name:${req.params.name}` })
                .then((cards) => {
                    res.status(200).json(cards.map(card => {
                        return {
                            name: card.name,
                            image: card.images.large,
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

// GET pokemon by id
router.get('/PokeId/:id', async (req, res) => {
    try {
        const findPokemonById = () => {
            pokemon.card.all({ q: `id:${req.params.id}` })
                .then((cards) => {
                    res.status(200).json(cards.map(card => {
                        return {
                            name: card.name,
                            image: card.images.large,
                            rarity: card.rarity,
                            id: card.id,
                        }
                    }))

                })
        };
        findPokemonById();
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET random pokemon
router.get('/random', async (req, res) => {
    try {
        const generateRandomPokemon = () => {
            const page = Math.ceil(Math.random() * 10);
            console.log(page);
            // adjust page size to change the amount that are generated
            pokemon.card.where({ pageSize: 5, page })
                .then((cards) => {
                    const randomData = shuffle(cards.data)
                    res.status(200).json(randomData.map(card => {
                        return {
                            name: card.name,
                            image: card.images.large,
                            rarity: card.rarity,
                            id: card.id,
                        }
                    }))
                });
        };
        generateRandomPokemon();
    } catch (err) {
        res.status(500).json(err);
    }
});








const pokemonId = 'ex11-1';

module.exports = router;