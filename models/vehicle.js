const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  VIN: { type: String, required: true },
  vehicleName: { type: String, required: true },
  ownerName:{ type: String, required: true },
  currentMile: { type: Number, required: true },
  estMileOil: { type: Number, required: true },
  oilType: { type: String, required: true },
  oilInterval: { type: Number, required: true }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
