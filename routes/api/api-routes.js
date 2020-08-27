const db = require("../../models");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");
const router = require("express").Router();
const path = require("path");
const vehicleController = require("../../controllers/vehicleControllers");
const notesController = require("../../controllers/notesControllers");

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
        res.status(400).json(err);
    });
});

router.get("/api/signup", (req, res) => {
    res.send(
        "test" 
    );
}); 

// Matches with "/api/vehicle"
router.route("/vehicle")
  .get(vehicleController.findAll)
  .post(vehicleController.create);

// Matches with "/api/vehicle/:id"
router
  .route("/vehicle/:id")
  .get(vehicleController.findById)
  .put(vehicleController.update)

// Matches with "/api/notes"
router.route("/notes")
  .get(notesController.findAll)
  .post(notesController.create);

// Matches with "/api/notes/:id"
router
  .route("/notes/:id")
  .get(notesController.findById)
  .put(notesController.update)


module.exports = router;
