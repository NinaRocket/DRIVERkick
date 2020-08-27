const { Notes } = require("../models");

// Defining methods for the notesController
// need a create, update, and find route
module.exports = {
    findAll: function(req, res) {
        Notes
          .find(req.query)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        Notes
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: function(req, res) {
        Notes
          .create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        Notes
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}