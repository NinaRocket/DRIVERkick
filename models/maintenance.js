const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// These are the extra features, using a different schema for the add new vehicle input
const maintenanceSchema = new Schema({
    // VIN to compare and make sure its the correct vehicle from user dashboard
    // grabbing from API:
    VIN: { type: Number, required: true },
    warranty: [{
        type: String,
        title: { type: String },
        provider: { type: String },
        notes: { type: String },
        date: { type: Date, default: Date.now }
    }],
    // grabbing from API:
    recalls: { type: String }
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
