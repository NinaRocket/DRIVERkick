const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();

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

// Endpoint to get current user
router.get("/info", function (req, res) {
  res.send(req.user);
});

// Endpoint to logout
router.get("/logout", function (req, res) {
  req.logout();
  res.send(null);
});

module.exports = router;