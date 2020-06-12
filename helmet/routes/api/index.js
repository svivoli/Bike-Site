const router = require('express').Router();
const bikeRoutes = require('./bike');
const frequencyRoutes = require('./frequency');
const usesRoutes = require('./uses');
const clientRoutes = require('./client');

//Bike routes
router.use("/bike", bikeRoutes);

//Frequency routes
router.use("/frequency", frequencyRoutes);

//Uses routes
router.use("/uses", usesRoutes);

//Client routes
router.use("/client", clientRoutes);

module.exports = router;