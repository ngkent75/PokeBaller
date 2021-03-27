const router = require('express').Router();
const {
    Pokemon,
    User,
    PokemonUser
} = require('../../models')

// GET all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{
                model: Pokemon,
            }]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET USER by ID
router.get('/:id', async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{
                model: Pokemon,
            }]
        });
        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// used to create a new user
router.post('/', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// used to login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                email: req.body.email,
            },
        });

        const validPassword = await dbUserData.checkPassword(req.body.password);

        if (!dbUserData || !validPassword) {
            res.status(400).json({
                message: 'Cannot find a user associated with that email/password, please try again'
            });
            return;
        }

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json({
                user: dbUserData,
                message: 'Successfully logged in!'
            });
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            req.logout(); // remove the req.user property and clear the login session
            res.redirect('/login'); //redirect to login page
            res.status(204).end();
        });
    } else {
        res.status(400).end();
    }
});


module.exports = router;