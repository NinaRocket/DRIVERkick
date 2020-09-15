const router = require("express").Router();
const userRoutes = require("./users");
const vehicleRoutes = require("./vehicles");
const warrantyRoutes = require("./warranty")

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/vehicle", vehicleRoutes);

// warranty routes
router.use("/warranty", warrantyRoutes);

module.exports = router;