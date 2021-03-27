const router = require('express').Router();
const userRoutes = require('./userRoutes');
const pokeRoutes = require('./pokeRoutes');

router.use('/users', userRoutes);
router.use('/pokeRoutes', pokeRoutes);

module.exports = router;