const router = require('express').Router();
const { Pokemon, User, PokemonUser } = require('../../models');



// const pokemonName = 'Beedrill';

const pokemonName = 'Beedrill'

const findAllPokemonByName = (name) => {pokemon.card.all({ q: `name:${name}` })
    .then((cards) => {
        return(cards.map(card => {
            return {
                name: card.name,
                image: card.images.large,
                rarity: card.rarity,
                id: card.id,
            }
        }))

})};

router.get('/', (req, res) => {
    console.log(findAllPokemonByName(pokemonName));
    try {
        res.status(200).json(findAllPokemonByName(pokemonName))
    } catch (err) {
        res.status(500).json(err);
    }
})

const pokemonId = 'ex11-1';

module.exports = router;

// const pokemonGet = () => {pokemon.card.all({ q: `id:${pokemonId}` })
// .then((cards) => {
//     console.log(cards.map(card => {
//         return {
//             name: card.name,
//             image: card.images.large,
//             rarity: card.rarity,
//             id: card.id,
//         }
//     })) 
    
// })
// }
// router.get('/:id', async (req, res) => {
//     try {
//         res.status(200).json(pokemonGet)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// })


