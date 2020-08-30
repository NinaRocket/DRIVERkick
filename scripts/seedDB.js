// not currently using this seed, only for testing
const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/driverkick"
  );

const vehicleSeed = [
 {
  nickname: "Betty",
  owner: "Linnea Gear",
  firstName: "Linnea",
  lastName: "Gear",
  make: "Hyundai",
  model: "Accent",
  year: "2015"
 }

  
]