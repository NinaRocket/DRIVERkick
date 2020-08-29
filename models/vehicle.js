const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// the vehicle model is whatever they are CREATING or inputting
const vehicleSchema = new Schema({
  nickname: { type: String },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  VIN: { type: Number, required: true },
  maintenance: [{
    type: Schema.Types.ObjectId,
    ref: "Maintenance"
  }]
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;
