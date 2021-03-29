const { Pokemon, User, PokemonUser } = require('./models');
const pokemon = require('pokemontcgsdk');
const shuffle = require('lodash.shuffle');

pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' })

const pokemonId = 'xy11-1';

pokemon.card.all({ q: `id:${pokemonId}` })
    .then((cards) => {
        console.table(cards.map(card => {
          return {
            name: card.name,
            images: card.images.large,
            rarity: card.rarity,
            id: card.id,
          }
        })) 
        
    })

// const page = Math.ceil(Math.random()*10);
// console.log(page);
// pokemon.card.where({ pageSize:5, page })
//     .then((cards) => {
//         const randomData = shuffle(cards.data)
//         console.log(randomData.map(card => {
//           return {
//             name: card.name,
//             image: card.images.large,
//             rarity: card.rarity,
//             id: card.id,
//             price: card.tcgplayer.prices.holofoil.market
//           }
//         }))
// });

// const userData = User.findAll({
//   include: [
//       {
//           model: Pokemon,
//       }
//   ]
// });

// console.log(userData);


// module.exports = seedPokemon;