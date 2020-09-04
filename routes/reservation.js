const express = require("express");
const router = express.Router();
const app = express();
const Reservation = require("../models/reservation");
const checkAuth = require("../middleware/check_auth");

router.post("/res", async (req, res) => {
  let reservation = new Reservation({
    idPoster : req.body.idPoster,
    idLogger : req.body.idLogger,
  });
  await reservation.save();
  res.send(reservation);
});


module.exports = router;
