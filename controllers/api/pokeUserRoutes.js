const router = require('express').Router();
const { PokemonUser } = require ('../../models');

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
    } catch (err) {res.status(500).json(err);}
});

//DELETE 1 ASSOCIATION
router.delete('/:id', async (req, res) => {
    try {
        const poke_user = await PokemonUser.destroy({
            where: {
                id: req.params.id
            }
        });
        if (!poke_user) {
            res.status(404).json({
                message: "No association found.",
            })
        }
        res.status(200).json(poke_user);
    } catch (err) {res.status(500).json(err);}
});

module.exports=router;