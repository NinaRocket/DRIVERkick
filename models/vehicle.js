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
  vehicleNickname: { type: String },
  currentMilage: { type: Number },
  nextOilChange: { type: Number },
  oilType: { type: String },
  warranty: [{
    type: Schema.Types.ObjectId,
    ref: "Warranty"
  }]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

