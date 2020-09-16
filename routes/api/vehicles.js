const router = require("express").Router();
const vehicleController = require("../../controllers/vehicleController");
const db = require("../../models");
const axios = require("axios");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.use(isAuthenticated);

router
  .route("/")
  // creates vehicle
  .post(vehicleController.create)
  // returns all vehicles of the logged in user
  .get(vehicleController.findAllByOwner);

router
  .route("/:id")
  // gets single vehicle by id
  .get(vehicleController.findById)
  // update vehicle
  .put(vehicleController.update)
  //delete vehicle
  .delete(vehicleController.remove);

router
  .route("/mileage/:id")
  .put(vehicleController.updateMileage);

router
  .route("/oil/:id")
  // gets vehicle oil change mileage
  .get(vehicleController.getOilChangeMiles)
  //updates the vehicles oil change
  .put(vehicleController.updateOil);

router
  .route("/decode-vin/:vin")
  // gets vehicle information from vin params
  .get(function (req, res) {
    axios
      .get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVinValues/${req.params.vin}?format=json`
      )
      .then((queryVehicle) => {
        const vehicle = {
          year: queryVehicle.data.Results[0].ModelYear,
          make: queryVehicle.data.Results[0].Make,
          model: queryVehicle.data.Results[0].Model,
          vin: req.params.vin,
        };
        res.json(vehicle);
      })
      .catch((err) => res.status(422).json(err));
  });

router.route("/recalls/:id").get(function (req, res) {
  db.Vehicle.findById(req.params.id)
    .then((queryVehicle) => {
      axios
        .get(
          `https://one.nhtsa.gov/webapi/api/Recalls/vehicle/modelyear/${queryVehcile.year}/make/${queryVehcile.make}/model/${queryVehicle.model}?format=json`
        )
        .then((dbRecalls) => {
          res.json(dbRecalls);
        });
    })
    .catch((err) => res.status(422).json(err));
});

module.exports = router;
