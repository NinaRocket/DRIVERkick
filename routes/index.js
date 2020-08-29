const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api-routes");

// API Routes
router.use("/api-routes", apiRoutes);

// If no API routes are hit, send the React app
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

module.exports = router;
