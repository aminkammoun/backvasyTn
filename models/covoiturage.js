const mongoose = require("mongoose");

const covoiturageSchema = new mongoose.Schema({
  type: {
    type: String,
    required:true
  },
  username: {
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
  nbrePlace: {
    type: String,
  },
  bagage: {
    type: Boolean,
  },
  idUserPoster: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

module.exports = mongoose.model("Covoiturage", covoiturageSchema);
