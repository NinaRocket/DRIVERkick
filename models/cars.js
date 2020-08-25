const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = new Schema({
  VIN: { type: Number, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  oilChange: [{
      
  }]
});

const Car = mongoose.model("Car", carSchema);

module.exports = Car;
