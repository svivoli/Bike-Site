const router = require("express").Router();
const usesController = require("../../controllers/usesController");

router.route('/signup3')
    .post(usesController.create);

module.exports = router;