const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// These are the extra features, using a different schema for the add new vehicle input
const maintenanceSchema = new Schema({
    VIN: { type: Number, required: true },
    // current mileage, grabbing from input:
    currentMileage: { type: Number, required: true },
    estimate: { type: Number },
    // date of when entered so can track:
    date: { type: Date, default: Date.now },
    // text form, user filling this out:
    warranty: {type: String},
    // grabbing from API:
    recalls: {type: String}
});

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);

module.exports = Maintenance;
