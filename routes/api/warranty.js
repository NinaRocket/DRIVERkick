const router = require("express").Router();
const warrantyController = require("../../controllers/warrantyController");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.use(isAuthenticated);

router.route("/")
    .post(warrantyController.create);

router.route("/:vehicleId")
    .get(warrantyController.findAllByVehicle);

router.route("/:id")
    .put(warrantyController.update)
    .delete(warrantyController.remove);

module.exports = router;