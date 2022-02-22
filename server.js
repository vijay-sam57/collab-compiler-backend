const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});
app.listen(5000, () => console.log("Running in port 5000"));
