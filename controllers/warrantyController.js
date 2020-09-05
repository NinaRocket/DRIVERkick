const { Warranty } = require("../models");

// Defining methods
// need a create, update, and find route, for warranty and recalls
module.exports = {
    findAll: function(req, res) {
        Warranty
          .find({ vehicle: req.body.vehicle })
          .populate("vehicle")
          .then(dbWarranties => res.json(dbWarranties))
          .catch(err => res.status(422).json(err));
      },
    findById: function(req, res) {
      Warranty
        .findById(req.body.id)
        .populate("vehicle")
        .then(dbWarranty => res.json(dbWarranty))
        .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        Warranty
          .create(req.body)
          .then(dbWarranty => res.json(dbWarranty))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        Warranty
          .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
          .then(dbWarranty => res.json(dbWarranty))
          .catch(err => res.status(422).json(err));
      },
      remove: function(req, res) {
        Warranty
          .findOneAndDelete({ _id: req.params.id })
          .then(dbWarranty => res.json(dbWarranty))
          .catch(err => res.status(422).json(err));
      }
};