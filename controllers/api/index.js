const router = require('express').Router();
const charRoutes = require('./charRoutes');
const userRoutes = require('./userRoutes');


router.use('/character', charRoutes);
router.use('/users', userRoutes);


module.exports = router;
