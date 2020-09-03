const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// These are the extra features, using a different schema for the add new vehicle input
const warrantySchema = new Schema({
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: "Vehicle",
        required: true
    },
    title: { type: String, required: true },
    provider: { type: String, required: true },
    details: { type: String, required: true },
    date: { type: Date, default: Date.now() }
});

const Warranty = mongoose.model("Warranty", warrantySchema);

module.exports = Warranty;