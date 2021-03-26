const router = require('experss').Router();
const { User, Pokemon } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/pokemon/:id', async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login');
});


module.exports = router;