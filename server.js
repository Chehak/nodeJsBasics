const express = require("express");
const app = express();
console.log(app);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.get("/idli", (req, res) => {
  var customized_idli = {
    name: "Rava idli",
    size: "10cm diameter",
    is_sambhar: true,
    is_chutney: false,
  };
  res.send(customized_idli);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
