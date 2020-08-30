const router = require("express").Router();
const userRoutes = require("./users");
const vehicleRoutes = require("./vehicles");
const maintRoutes = require("./maintenance")

// user routes
router.use("/user", userRoutes);

//vehicle routes
router.use("/vehicle", vehicleRoutes);

// maintenance routes
router.use("/maintenance", maintRoutes);

module.exports = router;