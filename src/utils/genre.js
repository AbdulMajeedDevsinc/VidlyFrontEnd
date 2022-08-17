export function filterGenres(movies, selectedGenre) {
  if (selectedGenre === "all") return movies;
  let filteredMovies = movies.filter((m) => m.genre.name === selectedGenre);
  return filteredMovies;
}
