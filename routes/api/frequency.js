const router = require("express").Router();
const frequencyController = require("../../controllers/frequencyController");

router.route('/signup2')
    .post(frequencyController.create);

module.exports = router;