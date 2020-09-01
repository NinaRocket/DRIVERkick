const router = require("express").Router();
const vehicleController = require("../../controllers/vehicleController");

router.route("/")
  // creates vehicle
  .post(vehicleController.create)
  // returns all vehicles of the logged in user
  .get(vehicleController.findAllByOwner);

router.route("/:id")
  // gets single vehicle by id
  .get(vehicleController.findById)
  // update vehicle
  .put(vehicleController.update)
  //delete vehicle
  .delete(vehicleController.remove);

module.exports = router;
