const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  VIN: { type: String, required: true },
  year: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  icon: { type: String, required: true },
  driverName: { type: String, default: "Untitled", trim: true },
  nickname: { type: String, default: "Untitled", trim: true },
  currentMileage: { type: Number, default: 0 },
  lastMileageUpdate: { type: Date, default: Date.now() },
  mileageHistory: [
    {
      date: { type: Date },
      mileage: { type: Number },
    },
  ],
  lastOilChange: { type: Number, default: 0 },
  oilInterval: { type: Number, default: 0 },
  oilType: { type: String, default: "Update" },
  warranties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Warranty",
    },
  ]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
