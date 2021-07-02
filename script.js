const numberOfFilms = prompt("How many movies have you seen so far?");

personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("One of the last movies you saw?", ""),
  b = prompt("How much would you like it?", ""),
  c = prompt("One of the last movies you saw?", ""),
  d = prompt("How much would you like it?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
