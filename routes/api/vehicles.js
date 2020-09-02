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

router.route("/oil/:id")
  // gets vehicle oil change mileage
  .get(vehicleController.getOilChangeMiles)
  //updates the vehicles oil change
  .get(vehicleController.updateOil);

router.get("/decode-vin/:vin", function (req, res) {
  const queryVehicle = await axios.get(
    `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${req.params.vin}?format=json`
  );
  const vehicle = {
    year: queryVehicle.data.ModelYear,
    make: queryVehicle.data.Make,
    model: queryVehicle.data.Model,
    vin: queryVIN,
  };
  res.json(vehicle);
});

module.exports = router;