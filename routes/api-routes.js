const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const router = require("express").Router();


// User Routes ----------------------------------------------- ||
router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
        email: req.user.email,
        id: req.user.id
    });
});

router.post("/api/signup", (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
    })
    .then(() => {
        res.redirect(307, "api/login");
    })
    .catch(err => {
        res.status(401).json(err);
    });
});

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });