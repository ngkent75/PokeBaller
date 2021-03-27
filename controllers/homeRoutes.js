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
router.get('/homepage', withAuth, (req, res) => {
    res.render('homepage');
    return;
});
router.get('/', withAuth, async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
      const users = userData.map((project) => project.get({ plain: true }));
      res.render('homepage', {
        users,
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
    res.render('homepage');
  });



module.exports = router;