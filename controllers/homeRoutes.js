const pokemon = require('pokemontcgsdk');
pokemon.configure({ apiKey: '80be9899-d5a3-48b0-bced-3f2974372f12' });

const router = require('express').Router();
const {
  User,
  Pokemon,
  PokemonUser
} = require('../models');
const withAuth = require('../utils/auth');
const searchTerm = require('../');
// const shuffle = require('lodash.shuffle');


// ANYTHING WITH WITHAUTH WILL REDIRECT YOU TO LOGIN IF YOU AREN'T ALREADY LOGGED IN

// get one card
router.get('/pokemon/:id', withAuth, async (req, res) => {
  try {
    const dbPokemonData = await Pokemon.findByPk(req.params.id);

    const pokemon = dbPokemonData.get({
      plain: true
    });

    res.render('pokemon', {
      pokemon,
      loggedIn: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET USER by ID
router.get('/users/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{
        model: Pokemon,
      }]
    });
    const userSerialize = JSON.parse(JSON.stringify(userData));
    res.render('collection', {
      ...userSerialize,
      logged_in: req.session.logged_in
    })
  } catch (err) {
    res.status(500).json(err);
  }
})

// get user collection
router.get('/collection', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pokemon }],
    });
    const user = JSON.parse(JSON.stringify(userData));
    res.render('collection', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Uses npm package to get all pokemon based on name
router.get('/search/:pokemonName', async (req, res) => {
  try {
    // const pokemonName = 'pikachu';
    const findAllPokemonByName = () => {
      pokemon.card.all({ q: `name:${req.params.pokemonName}` })
        .then((cards) => {
          const cardMap = cards.map(card => {
            return {
              name: card.name,
              images: card.images.large,
              rarity: card.rarity,
              id: card.id,
            }
          })
          const card = JSON.parse(JSON.stringify(cardMap));
          res.render('add', {
            ...card,
            logged_in: req.session.logged_in
          })

        })
    };
    findAllPokemonByName();
  } catch (err) {
    res.status(500).json(err);
  }
});

// renders a blank page with add
router.get('/add', async (req, res) => {
  try{
    res.render('add',{})
  } catch (err) {
    res.status(500).json(err);
  }
})

// redirects root to homepage if logged in, login page if logged out
router.get('/', withAuth, async (req, res) => {
  try {
    res.redirect('/homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders homepage
router.get('/homepage', withAuth, async (req, res) => {
  try {
    res.render('homepage', {
      // users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// shows collection based on user id
router.get('/collection/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ model: Pokemon }],
    });
    const user = userData.get({ plain: true });

    res.render('collection', {
      ...user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

// //get random/suggested 5 pokemon cards
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
//             // price: card.tcgplayer.prices.holofoil.market
//           }
//         }))
// });
module.exports = router;