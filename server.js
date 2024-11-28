const express = require('express');
const fetch = require('node-fetch');
const app = express();

const PORT = 3000;
const API_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjU5MWJmYTA5LTU2ZGQtNDk5Ny1iNDc0LTBkMGY0ZTc3ZjJhNiIsImlhdCI6MTczMjQ0MDcyNCwic3ViIjoiZGV2ZWxvcGVyLzY5MDNmMmIwLWFmM2ItZGI4My00OGUzLTE5MGRlMjMyZGNkMCIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTE1LjEzNy4xMi4xNCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.A43FHVZRKyUs4Dr3B3R3d0oqRjszN5DnW5frXHXh1d-WtLfcS6aOAv-uW7on_5FpA8SBhiXknml41iwGpKYJsQ";

app.get('/player/:tag', async (req, res) => {
  const tag = req.params.tag;
  const url = `https://api.brawlstars.com/v1/players/%23${tag}`;

  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    if (!response.ok) {
      return res.status(response.status).send("Failed to fetch player data.");
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error.");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
