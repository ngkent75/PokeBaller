const pokemon = require('pokemontcgsdk');
pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' });

const pokemonName = 'Beedrill'


const findAllPokemonByName = () => {pokemon.card.all({ q: `name:${pokemonName}` })
    .then((cards) => {
        res.status(200).json(cards.map(card => {
            return {
                name: card.name,
                image: card.images.large,
                rarity: card.rarity,
                id: card.id,
            }
        }))

})};
// const findAllPokemonByName = () => {pokemon.card.all({ q: `name:${pokemonName}` })
//     .then((cards) => {
//         return (cards.map(card => {
//             return {
//                 name: card.name,
//                 image: card.images.large,
//                 rarity: card.rarity,
//                 id: card.id,
//             }
//         }))

// })};

// console.log(findAllPokemonByName(pokemonName));

// console.log(findAllPokemonByName());


