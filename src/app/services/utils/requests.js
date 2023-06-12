const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const REQUESTS = {};

/**
 * Comment some ajax call to avoid running out of free calls to themoviedb api
 */
REQUESTS.MOVIES = {
  fetchTrendingMovies: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`, // Trending
  fetchTopRatedMovies: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`, // Top rated
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`, // Action
  // fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`, // Comedy
  // fetchCrimeMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`, // Crime
  // fetchThrillerMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=53`, // Thriller
  // fetchSciFiMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`, // Sci fi
};

REQUESTS.TV_SERIES = {
  fetchTopRatesTvSeries: `${BASE_URL}/tv/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopularTvSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc`,
  fetchComedyTvSeries: `${BASE_URL}/discover/tv?api_key=${API_KEY}&language=en-US&with_genres=35`, // Comedy
  // fetchDocumentaryTvSeries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=99`, // Documentary
};

export default REQUESTS;
