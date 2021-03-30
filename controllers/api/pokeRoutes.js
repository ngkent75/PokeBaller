const pokemon = require('pokemontcgsdk');
require('dotenv').config();
pokemon.configure({ apiKey: process.env.KEY });
const shuffle=require('lodash.shuffle')
const router = require('express').Router();
const { Pokemon } = require('../../models');


//FIND ALL POKEMON BASED ON NAME
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

router.get('/', async (req, res) => {
    try {
        // const pokemonName = 'Charizard';
        const findAllPokemonByName = () => {
            pokemon.card.all()
            .then((cards) => {
                res.status(200).json(cards.map(card => {
                    return {
                        name: card.name,
                    }
                }))

            })
        };
        findAllPokemonByName();
    } catch (err) {
        res.status(500).json(err);
    }
});

//
router.get('/pokemon/:id', async (req, res) => {
    const pokemonId = 'ex14-1' //WHY IS THIS HARD CODED?????????
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


router.get('/random/pokemon', async (req, res) => {
    try {
        const page = Math.ceil(Math.random()*10);
        console.log(page);
        pokemon.card.where({ pageSize:5, page })
            .then((cards) => {
                const randomData = shuffle(cards.data)
                res.status(200).json(randomData.map(card => {
                  return {
                    name: card.name,
                    images: card.images.large,
                    rarity: card.rarity,
                    id: card.id,
                  }
                }))
        });
        
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/local/:id', async (req, res) => {
    try {
        const localPokemonData = await Pokemon.findByPk(req.params.id);
        res.status(200).json(localPokemonData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post pokemon card
router.post('/', async (req, res) => {
    try {
        const newPokemonData = await Pokemon.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newPokemonData);
    } catch (err) {
        res.status(500).json(err);
    }
});




module.exports = router;