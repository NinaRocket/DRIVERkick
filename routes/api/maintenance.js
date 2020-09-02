const router = require("express").Router();
const maintController = require("../../controllers/maintController");

router.route("/")
    .get(maintController.findAll)
    .post(maintController.create)

module.exports = router;