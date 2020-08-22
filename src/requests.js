const API_KEY = "f39a9cefbf8bce7a9519c244a1350c78";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_gnres=28`, 
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_gnres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_gnres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_gnres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_gnres=99`,
}

export default requests;