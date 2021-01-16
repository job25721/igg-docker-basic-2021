const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my server");
});

app.listen(80, () => {
  console.log("server started on port 8000");
});
