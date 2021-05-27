const router = require('express').Router();
const {
    PokemonUser,
} = require('../../models');

// GET ALL ASSOCIATIONS
router.get('/', async (req, res) => {
    try {
        const poke_user = await PokemonUser.findAll();
        if (!poke_user) {
            res.status(404).json({
                message: "No association found.",
            })
        }
        res.status(200).json(poke_user);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD ASSOCIATION
router.post('/', async (req, res) => {
    console.log(req.body);
    const { user_id } = req.session;
    const { pokemon_id } = req.body;
    try {
        const poke_user_Data = await PokemonUser.create({ user_id, pokemon_id });
        res.sendStatus(200);
        // TODO check why sendStatus being used instead of rest.status(200).json(err);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE 1 ASSOCIATION
router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.session.user_id);
    try {
        const poke_user = await PokemonUser.destroy({
            where: {
                pokemon_id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!poke_user) {
            res.status(404).json({
                message: "No association found.",
            })
        }
        res.status(200).json(poke_user);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;