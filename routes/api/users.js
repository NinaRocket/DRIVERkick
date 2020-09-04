const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// User Routes ----------------------------------------------- ||
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

router.post("/signup", (req, res) => {
  db.User.create({
    email: req.body.email,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  })
    .then(() => {
      res.redirect(307, "api/login");
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// checks and returns wether or not the ser is authenticated
router.get("/isAuthenticated", function (req, res) {
  const isAuthenticated = {
    isAuthenticated: req.user == true,
  };
  res.json(isAuthenticated);
});

// Endpoint to get current user
router.get("/info", isAuthenticated, function (req, res) {
  db.User.findById(req.user._id)
    .then((dbUser) => res.json(dbUser))
    .catch((err) => res.status(404).json(err));
});

// Endpoint to logout
router.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

module.exports = router;