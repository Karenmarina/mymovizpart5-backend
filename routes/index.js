var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/movies", (req, res) => {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=29ff2656452d7b3c5abd2103c08d5f5b"
  )
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      res.json({ movies: data.results });
    });
});

module.exports = router;
