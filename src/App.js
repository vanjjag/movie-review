import { useEffect } from "react";

import useFetchMovies from "./hooks/use-fetch-movies";
import Header from "./Components/Header";
import MoreButton from "./Components/MoreButton";
import MovieList from "./Components/MovieList";

function App() {
  const [movies, error, fetchMoviesHandler] = useFetchMovies();

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <div className="App">
      <Header />
      <MovieList movies={movies} />
      {error && <p>{error}</p>}
      <MoreButton onClick={fetchMoviesHandler} />
    </div>
  );
}

export default App;
