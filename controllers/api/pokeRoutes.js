const pokemon = require('pokemontcgsdk');
pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' });

const router = require('express').Router();
const { Pokemon, User, PokemonUser } = require('../../models');





router.get('/:pokename', async (req, res) => {
    try {
        // const pokemonName = 'Charizard';
        const findAllPokemonByName = () => {
            pokemon.card.all({ q: `name:${req.params.pokename}` })
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

router.get('/pokemon/:id', async (req, res) => {
    const pokemonId = 'ex14-1'
    // console.log(req.params.id);
    console.log(pokemonId);
    try {
        // const pokemonName = 'Charizard';
        const findPokemonById = () => {
            pokemon.card.all({ q: `id:${req.params.id}` })
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
        findPokemonById();
    } catch (err) {
        res.status(500).json(err);
    }
});


router.get('/local/:id', async (req, res) => {
    try {
        const localPokemonData = await Pokemon.findByPk(req.params.id);
        res.status(200).json(localPokemonData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post pokemon card
router.post('/pokemon', async (req, res) => {
    try {
        const newPokemonData = await Pokemon.create(req.body);
        res.status(200).json(newPokemonData);
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;