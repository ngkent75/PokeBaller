const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pokeRoutes = require('./pokeRoutes');
const pokeUserRoutes = require('./pokeUserRoutes');
const pokemonUserWishRoutes=require('./pokeUserWishlistRoutes');

router.use('/users', userRoutes);
router.use('/pokeRoutes', pokeRoutes);
router.use('/pokeUserRoutes', pokeUserRoutes);
router.use('/pokeUserWishRoutes', pokemonUserWishRoutes);

module.exports = router;