const router = require("express").Router();
const bikeController = require("../../controllers/bikeController");

router.route('/')
    .post(bikeController.create);

module.exports = router;