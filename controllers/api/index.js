const router = require('express').Router();
const userRoutes = require('./user-routes');
const bmiRoutes = require('./bmi-routes.js');
router.use('/users', userRoutes);
router.use('/bmi', bmiRoutes);
module.exports = router;