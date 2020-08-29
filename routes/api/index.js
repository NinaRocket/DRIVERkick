const router = require("express").Router();
const userRoutes = require("./users");
const vehicleRoutes = require("./vehicles");

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/vehicle", vehicleRoutes);

module.exports = router;