const express = require("express");
var cors = require('cors')

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors());

app.get("/api/addScorePoints", (_req, res) => {
  res.json({ addScorePoints: [...Array(11).keys()] });
});

app.get("/api/throws", (_req, res) => {
  res.json({ throws: [...Array(10).keys()] });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
