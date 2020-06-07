const router = require("express").Router();
const clientController = require("../../controllers/clientController");

router.route('/signup4')
    .post(clientController.create);

module.exports = router;