// backend/server.js
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

const headlines = require("./headlines");

app.use(cors());
app.use(express.json());

// POST /business-data
app.post("/business-data", (req, res) => {
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({ error: "Name and location are required." });
  }


  const sampleData = {
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 500 + 50),
    headline: `Why ${name} is ${location}'s Sweetest Spot in 2025`,
  };

  res.json(sampleData);
});

// GET /regenerate-headline
app.get("/regenerate-headline", (req, res) => {
  const { name, location } = req.query;
  const randomHeadline =
    headlines[Math.floor(Math.random() * headlines.length)];
  res.json({
    headline: randomHeadline.replace("{name}", name).replace("{location}", location),
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
