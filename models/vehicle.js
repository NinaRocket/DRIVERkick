const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  VIN: { type: String, required: true },
  year: {type: Number, required: true },
  make: { type: String, required: true},
  model: { type: String, required: true },
  nickname: { type: String },
  currentMileage: { type: Number },
  nextOilChange: { type: Number },
  oilType: { type: String },
  warranties: [{
    type: Schema.Types.ObjectId,
    ref: 'Warranty'
  }]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

