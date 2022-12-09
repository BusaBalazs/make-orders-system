const path = require("path");
const express = require("express");
const app = express();

const db = require("./data/database");

const errorHandle = require("./middleware/errorHandle");
const url = require('./middleware/checkUrl');
const basicRoutes = require("./routes/routes");



//-------------------------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
//-------------------------------------------------
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.use(url);
app.use(basicRoutes);

app.use(errorHandle);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Faild to connect to the database!");
    console.log(error);
  });
