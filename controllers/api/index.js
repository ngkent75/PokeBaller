const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pokeRoutes = require('./pokeRoutes');
const pokeUserRoutes = require('./pokeUserRoutes');

router.use('/users', userRoutes);
router.use('/pokeRoutes', pokeRoutes);
router.use('/pokeUserRoutes', pokeUserRoutes);

module.exports = router;