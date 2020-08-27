const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  VIN: { type: Number, required: true },
  nickname: { type: String, required: true },
  owner: { type: String, required: true },
  mileage: { type: Number, required: true }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
