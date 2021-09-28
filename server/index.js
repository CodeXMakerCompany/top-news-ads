const express = require("express");
const bodyParser = require("body-parser");

const googleNewsScraper = require("google-news-scraper");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

//CORSE
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.get("/api/get-articles", async (req, res) => {
  const articles = await googleNewsScraper({
    searchTerm: "trending",
    prettyURLs: false,
    queryVars: {
      hl: "es-MX",
      gl: "MX",
      ceid: "MX:es",
    },
    timeframe: "10d",
    puppeteerArgs: [],
  });
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify({ articles }));
});

app.listen(3003, () =>
  console.log("Express server is running on localhost:3003")
);
