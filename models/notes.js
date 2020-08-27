const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// These are the extra features
const notesSchema = new Schema({
    // for oil changes, need oil TYPE and Mileage to calculate when next oil change
    oil: {type: String},
    mileage: { type: Number, required: true },
    // date of when entered so can track
    date: { type: Date, default: Date.now },
    warranty: {type: String},
    recalls: {type: String}
});

const Notes = mongoose.model("Notes", notesSchema);

module.exports = Notes;
