const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const axios = require("axios");
const path = require("path");

// User Routes ----------------------------------------------- ||
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.post("/signup", (req, res) => {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .then((dbUser) => {
      res.json({
        email: dbUser.email,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// logout
router.get("/logout", (req, res) => {
  req.logout();
  res.status(200).sendFile(path.join(__dirname, "../client/build/index.html"));
});

// checks and returns wether or not the ser is authenticated
router.get("/isAuthenticated", function (req, res) {
  if (req.user) {
    res.json({ isAuthenticated: true })
  }
  else {
    res.json({ isAuthenticated: false })
  }
});

// Endpoint to get current user
router.get("/info", isAuthenticated, function (req, res) {
  db.User.findOne({ _id: req.user._id })
    .populate({
      path: "vehicles",
      model: "Vehicle",
      populate: { path: "warranties", model: "Warranty" },
    })
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(404).json(err));
});

module.exports = router;
