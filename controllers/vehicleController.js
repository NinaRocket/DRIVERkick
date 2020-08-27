const db = require("../models");

module.exports = {
    findByOwner: function(req, res) {
        db.Vehicle.find({ owner: req.user.id })
            .then(dbVehicles => res.json(dbVehicles))
            .catch(err=> res.status(422).json(err))
    },
    create: function(req, res) {
        db.Vehicle.create(req.body)
            .then(dbVehicle => res.json(dbVehicle))
            .catch(err => res.status(422).json(err))
    },
    update: function(req, res) {
        db.Vehicle.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbVehicle => res.json(dbVehicle))
            .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.Vehicle.findOneAndDelete({ _id: req.params.id })
            .then(dbVehicle => res.json(dbVehicle))
            .catch(err => res.status(422).json(err));
    }
};