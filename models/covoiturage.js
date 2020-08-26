const mongoose = require("mongoose");

const covoiturageSchema = new mongoose.Schema({
  type: {
    type: String,
    required:true
  },
  name: {
    type: String,
    required: true,
  },
  familyName: {
    type: String,
    required: true,
  },
  depart: {
    type: String,
    required: true,
  },
  arrive: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  prix: {
    type: Number,
  },
  description: {
    type: String,
  },
  bagage: {
    type: Boolean,
  },
});

module.exports = mongoose.model("Covoiturage", covoiturageSchema);
