const db = require("../models");

module.exports = {
  findAllByOwner: function (req, res) {
    db.Vehicle.find({ user: req.user._id })
      // populate warranties for that vehicle
      .then((dbVehicles) => res.json(dbVehicles))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Vehicle.find({ _id: req.params.id })
      // populate warranties for that vehicle
      .populate("warranties")
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Vehicle.create({
      user: req.user._id,
      VIN: req.body.VIN,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model,
    })
      .then((dbVehicle) => {
        db.User.findOneAndUpdate(
          { _id: req.user._id },
          { $push: { vehicles: dbVehicle._id } }
        ).then((dbVehicle) => res.json(dbVehicle));
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Vehicle.findOneAndDelete({ _id: req.params.id })
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
  getOilChangeMiles: function (req, res) {
    db.Vehicle.findById(req.params.id)
      .then((dbVehicle) => {
        const response = {
          currentMileage: dbVehicle.currentMile,
          milesToChange:
            parseInt(dbVehicle.currentMile) - parseInt(dbVehicleest.MileOil),
          oilInterval: dbVehicle.oilInterval,
        };
        res.json(response);
      })
      .catch((err) => res.status(422).json(err));
  },
  updateOil: function (req, res) {
    db.Vehicle.findOneAndUpdate(
      { _id: req.params.id },
      { estMileOil: req.body.nextChange },
      { new: true }
    )
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
  getMiles: function (req, res) {
    db.Vehicle.findById(req.params.id)
      .then((dbVehicle) => {
        const response = {
          currentMileage: dbVehicle.currentMileage,
        };
        res.json(response);
      })
      .catch((err) => res.status(422).json(err));
  },
  postMiles: function (req, res) {
    db.Vehicle.findOneAndUpdate(
      { _id: req.params.id },
      { currentMileage: req.body },
      { new: true }
    )
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
};
