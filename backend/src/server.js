const express = require("express");
const app = express();
const port = 4000;

app.get("/test", (req, res) => {
  res.send("Test!");
});

app.listen(port, () => {
  console.log(`Backend server is listening on port ${port}`);
});