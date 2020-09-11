const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  
  idPoster: {
    type: String,
    required: true,
  },
  idLogger: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Reservation", userSchema);
