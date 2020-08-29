const db = require("../../models");
const passport = require("../../config/passport");
const router = require("express").Router();

// User Routes ----------------------------------------------- ||
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.json({
        email: req.user.email,
        id: req.user.id
    });
});

router.post("/signup", (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    .then(() => {
        res.redirect(307, "api/login");
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;
