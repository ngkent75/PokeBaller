const router = require('express').Router();
const {
  User,
  Pokemon,
  PokemonUser
} = require('../models');
const withAuth = require('../utils/auth');

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





router.get('/', withAuth, async (req, res) => {
  try {
    res.redirect('/homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

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
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password'] },
    //   include: [{ model: Pokemon }],
    // });
    // const user = userData.get({ plain: true });

    // res.render('collection', {
    //   ...user,
    //   logged_in: true
    // });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});


module.exports = router;