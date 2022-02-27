const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

let User = require("../models/user.model");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route("/adduser").post(function (req, res) {
  let user = new User(req.body);
  user
    .save()
    .then((user) => {
      res.status(200).send({ user });
    })
    .catch((err) => {
      res.status(400).send("adding user failed");
    });
});

router.route("/nandika").get(function (req, res) {
  res.send("Nandika on node");
});

router.route("/getusers").get(function (req, res) {
  User.find(function (err, officers) {
    if (err) {
      console.log(err);
    } else {
      res.json(officers);
    }
  });
});

module.exports = router;
