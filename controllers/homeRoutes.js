const router = require('express').Router();
const { User, Pokemon, PokemonUser } = require('../models');
const withAuth = require('../utils/auth');

// get all of the
// router.get('/', async (req, res) => {
//     try {
//         const data = await 
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// get one collection
router.get('/collection/:id', withAuth, async (req, res) => {
    try {
        const dbPokemonData = await Pokemon.findByPk(req.params.id, {
            include: [
                {
                    model: Pokemon,
                    attributes: [
                        'id',
                        'name',
                        'rarity',
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
router.get('/', (req, res) => {
    if (req.session.logged_out) {
        res.redirect('/login')
    } else {
        res.redirect('/homepage')
    }
});

router.get('/login', (req, res) => {
    res.render('login');
    return;
});

router.get('/homepage', withAuth, (req, res) => {
    res.render('homepage');
    return;
});



module.exports = router;