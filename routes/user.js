const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

router.get("/", async (req, res) => {
  const user = await User.find();
  res.send(user);
});

router.post("/signIn", async (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        console.log("user exist");
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              username: req.body.username,
              phone: req.body.phone,
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({
                  message: "user created",
                });
              })
              .catch((err) => {
                console.log(err.errors.email.message);
                res.status(500).json({
                  error: err.errors.email.message,
                });
              });
          }
        });
      }
    });
  await userSign.save();
  res.send(userSign);
});

router.post("/login", (req, res, next) => {
  User.find({ username: req.body.username })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "auth failed",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "auth failed",
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              username: user[0].username,
              userId: user[0].id,
            },
            "secret",
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "auth successful",
            token: token,
            userId: user[0].id,
          });
        }
        res.status(401).json({
          message: "auth failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .exec()
    .then((user) => {
      return res.status(200).json(user);
    });
});

module.exports = router;
