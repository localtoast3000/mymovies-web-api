const express = require('express');
const router = express.Router();
const { getDiscoverMovies } = require('../api/movies_db');

router.get('/movies', async (req, res) => {
  res.json({ movies: await getDiscoverMovies() });
});

module.exports = router;
