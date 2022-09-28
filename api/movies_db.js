const fetch = require('node-fetch');

function constructURL(endpoint, query = '') {
  return `https://api.themoviedb.org/3${endpoint}?api_key=${process.env.MDB_API_KEY}${query}`;
}

async function getDiscoverMovies() {
  const result = await fetch(constructURL('/discover/movie'));
  return result.json();
}

module.exports = { getDiscoverMovies };
