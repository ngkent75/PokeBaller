const router = require('experss').Router();
const { User, Pokemon } = require('../models');
const withAuth = require('../utils/auth');

// get all of the
router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

// get one card
router.get('/pokemon/:id', async (req, res) => {
    try {
        const pokemonData = await Pokemon.findByPk(req.params.id);

        const pokemon = pokemonData.get({ plain: true });

        res.render('pokemon', { pokemon, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get route for logging in
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});


module.exports = router;