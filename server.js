const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");
const Person = require("./models/Person");
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("hello world");
});

const personRoutes = require('./routes/PersonRoutes');
app.use('/person',personRoutes);

const menuItemsRoute = require('./routes/MenuItemsRoute');
app.use('/menu',menuItemsRoute);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
