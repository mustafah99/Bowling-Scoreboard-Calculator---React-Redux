const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());

app.get("/api", (_req, res) => {
  res.json({ scorePoints: [...Array(11).keys()] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
