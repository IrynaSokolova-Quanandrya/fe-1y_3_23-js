const BASE_URL = 'http://localhost:3000';

function fetchMovies() {
  return fetch(`${BASE_URL}/books`).then(res => res.json());
}

function fetchMovieById(movieId) {
  return fetch(`${BASE_URL}/books/${movieId}`).then(res => res.json());
}

fetchBooks();
fetchBookById(2);
fetchBookById(4);
