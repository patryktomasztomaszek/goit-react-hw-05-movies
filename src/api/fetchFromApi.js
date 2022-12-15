// import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '2f202abcab3fe0934220a17698275697';

export async function fetchTrendingMovies() {
  const fetchedData = await fetch(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieReviewsById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieCastById(movieId) {
  const fetchedData = await fetch(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`
  );
  const response = await fetchedData.json();
  return response;
}

export async function fetchMovieByQuery(query) {

//   console.log(axios.get(`${BASE_URL}search/movie/?api_key=${API_KEY}&query=${query}`))
//   const fetchedData = await axios.get(`${BASE_URL}search/movie/?api_key=${API_KEY}&query=${query}`)
//  console.log(fetchedData.data);
//   const response = await fetchedData.data

  const fetchedData = await fetch(
    `${BASE_URL}search/movie/?api_key=${API_KEY}&query=${query}`
  );
  console.log(fetchedData);
  const response = await fetchedData.json();
  console.log(response)
  return response;
}
