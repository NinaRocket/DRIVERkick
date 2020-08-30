const router = require("express").Router();
const vehicleController = require("../../controllers/vehicleController");

router.route("/").post(vehicleController.create);

router
  .route("/:id")
  // get vehicle by first finding owner
  .get(vehicleController.findByOwner)
  // update vehicle
  .put(vehicleController.update);

module.exports = router;
