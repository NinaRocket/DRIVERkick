const db = require("../models");

module.exports = {
  findAllByOwner: function (req, res) {
    db.Vehicle.find({ user: req.user._id })
      // populate warranties for that vehicle
      .populate("warranties")
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
      icon: req.body.icon,
    })
      .then((dbVehicle) => {
        db.User.findOneAndUpdate(
          { _id: req.user._id },
          { $push: { vehicles: dbVehicle._id } }
        );
        return res.json(dbVehicle);
      })
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  },
  updateMileage: (req, res) => {
    db.Vehicle.findOneAndUpdate(
      { _id: req.params.id },
      {
        currentMileage: req.body.currentMileage,
        lastMileageUpdate: Date.now(),
        $push: {
          mileageHistory: {
            date: Date.now(),
            mileage: req.body.currentMileage,
          },
        },
      },
      { new: true }
    )
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
          percentageToChange:
            100 -
            ((parseInt(dbVehicle.currentMileage) -
              parseInt(dbVehicle.lastOilChange)) /
              parseInt(dbVehicle.oilInterval)) *
              100,
          milesToChange:
            parseInt(dbVehicle.lastOilChange) +
            parseInt(dbVehicle.oilInterval) -
            parseInt(dbVehicle.currentMileage),
        };
        res.json(response);
      })
      .catch((err) => res.status(422).json(err));
  },
  updateOil: function (req, res) {
    db.Vehicle.findByIdAndUpdate(
      req.params.id,
      {
        currentMileage: parseInt(req.body.currentMileage),
        lastOilChange: parseInt(req.body.currentMileage),
        oilInterval: parseInt(req.body.oilInterval),
        oilType: req.body.oilType,
        $push: {
          mileageHistory: {
            date: Date.now(),
            mileage: req.body.currentMileage,
          }
        }
      },
      { new: true }
    )
      .then((dbVehicle) => res.json(dbVehicle))
      .catch((err) => res.status(422).json(err));
  }
};
