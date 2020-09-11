const express = require("express");
const router = express.Router();
const app = express();
const Reservation = require("../models/reservation");
const checkAuth = require("../middleware/check_auth");

router.post("/res", async (req, res) => {
  let reservation = new Reservation({
    idPoster: req.body.idPoster,
    idLogger: req.body.idLogger,
  });
  await reservation.save();
  res.send(reservation);
});

router.get("/", async (req, res) => {
  const reservation = await Reservation.find();
  res.send(reservation);
});
router.get("/logger/:id", async (req, res) => {
  const reservation = await Reservation.find({ idLogger: req.params.id });
  res.send(reservation);
});

router.get('/historique/:id', async (req,res)=>{

 const reset =  Reservation.aggregate([{
    $lookup:{
      from: "covoiturages",
      localField: "idLogger",
      foreignField: "idUserPoster",
      as: "docs"
    }
  }])

  console.log(reset)
  res.send(reset)
})



module.exports = router;
