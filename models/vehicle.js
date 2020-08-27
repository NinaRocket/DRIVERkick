const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  VIN: { type: Number, required: true },
  nickname: { type: String, required: true },
  owner: { type: mongoose.ObjectId, required: true, ref: "User" },
  mileage: { type: Number, required: true },
  make: { type: String, required: true },
  model:{ type: String, required: true },
  year: { type: Number, required: true },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
