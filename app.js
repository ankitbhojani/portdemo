const express = require("express");
const path = require("path");

const app = express();
const port = "12";

app.get("/", (req, res) => {
  res.status(200).send("Hello Users, 12 port configured");
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
