const router = require('express').Router();
const {
    PokemonUserWishlist,
} = require('../../models');

// GET ALL ASSOCIATIONS
router.get('/', async (req, res) => {
    try {
        const poke_user_wish = await PokemonUserWishlist.findAll();
        if (!poke_user_wish) {
            res.status(404).json({
                message: "No association found.",
            })
        }
        res.status(200).json(poke_user_wish);
    } catch (err) {
        res.status(500).json(err);
    }
});

// ADD ASSOCIATION
router.post('/', async (req, res) => {
    const { user_id } = req.session;
    const { pokemon_id } = req.body;
    try {
        const poke_user_Data = await PokemonUserWishlist.create({ user_id, pokemon_id });
        res.sendStatus(200);
    } catch (err) {
        res.status(500).json(err);
    }
});

//DELETE 1 ASSOCIATION
router.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.session.user_id);
    try {
        const poke_user_wish = await PokemonUserWishlist.destroy({
            where: {
                pokemon_id: req.params.id,
                user_id: req.session.user_id
            }
        });
        if (!poke_user_wish) {
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