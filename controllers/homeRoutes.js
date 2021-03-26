const router = require('experss').Router();
const { User, Pokemon, Collection } = require('../models');
const withAuth = require('../utils/auth');

// // get all of the
// router.get('/', async (req, res) => {
//     try {

//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// get one collection
router.get('/collection/:id', withAuth, async (req, res) => {
    try {
        const dbPokemonData = await Collection.findByPk(req.params.id, {
            include: [
                {
                    model: Pokemon,
                    attributes: [
                        'id',
                        'name',
                        'level',
                        'hp',
                        'types',
                        'attacks',
                        'weaknesses',
                        'resistances',
                        'convertedRetreatCost',
                        'set',
                        'artist',
                        'rarity',
                        'nationalPokedexNumbers',
                        'images',
                        'collection_id',
                    ],
                },
            ],
        });

        const collection = dbPokemonData.get({ plain: true });
        res.render('collection', { collection, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get one card
router.get('/pokemon/:id', async (req, res) => {
        try {
            const dbPokemonData = await Pokemon.findByPk(req.params.id);

            const pokemon = dbPokemonData.get({ plain: true });

            res.render('pokemon', { pokemon, loggedIn: req.session.loggedIn });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    });

// for login
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});


module.exports = router;