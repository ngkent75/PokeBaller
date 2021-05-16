const pokemon = require('pokemontcgsdk');
require('dotenv').config();
pokemon.configure({ apiKey: process.env.KEY });
const withAuth = require('../utils/auth');
const router = require('express').Router();
const shuffle = require('lodash.shuffle');

const {
  User,
  Pokemon,
} = require('../models');
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
    // TODO: Add modal
  }
});

// GET USER by ID
router.get('/users/:id', withAuth, async (req, res) => {
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
router.get('/search/:pokemonName', withAuth, async (req, res) => {
  try {
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
        console.log(card);
        res.render('add', {
          // https://stackoverflow.com/questions/35675076/handlebars-renders-extra-empty-objects-from-json-array-in-node-express-app
          // Had issue with empty objects being rendered, found the solution in this stack overflow post
          card: card,
          logged_in: req.session.logged_in
        })

      })

  } catch (err) {
    res.status(500).json(err);
  }
});



// renders a blank page with add
router.get('/add', withAuth, async (req, res) => {
  try {
    res.render('add', {logged_in: req.session.logged_in})
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
// renders homepage with 5 random cards
router.get('/homepage', withAuth, async (req, res) => {
  try {
    const page = Math.ceil(Math.random() * 10);
    pokemon.card.where({ pageSize: 5, page })
      .then((cards) => {
        const randomData = shuffle(cards.data)
        const suggestedDataMap = randomData.map(card => {
          return {
            rname: card.name,
            rimages: card.images.large,
            rrarity: card.rarity,
            rid: card.id,
          }
        })
        const suggested = JSON.parse(JSON.stringify(suggestedDataMap));
        res.render('homepage', {
          // https://stackoverflow.com/questions/35675076/handlebars-renders-extra-empty-objects-from-json-array-in-node-express-app
          // Had issue with empty objects being rendered, found the solution in this stack overflow post
          suggested: suggested,
          logged_in: req.session.logged_in
        })
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



module.exports = router;