const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://nandika:1234@cluster0.6lp1s.mongodb.net/DeployDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("mongodb connection established successfully");
});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("default API");
});
app.use("/", require("./routes/user.router"));

app.listen(PORT, () => console.log(`app is listening in port ${PORT} ...`));
