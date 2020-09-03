const router = require("express").Router();
const warrantyController = require("../../controllers/warrantyController");

router.route("/")
    .get(warrantyController.findAll)
    .post(warrantyController.create);

router.route("/:id")
    .get(warrantyController.findById)
    .put(warrantyController.update)
    .delete(warrantyController.remove);

module.exports = router;