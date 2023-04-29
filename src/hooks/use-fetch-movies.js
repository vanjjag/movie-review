import { useState, useCallback } from "react";

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  let i = 1;

  const fetchMoviesHandler = useCallback(async () => {
    setError(null);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=26a3be46994e4744948cf49ad5da132f&language=en-US&page=${i++}`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.id,
          title: movieData.title,
          poster: movieData.poster_path,
          releaseDate: movieData.release_date,
          overview: movieData.overview,
          backdrop: movieData.backdrop_path,
        };
      });
      setMovies((prevState) => {
        return [...prevState, transformedMovies].flat();
      });
    } catch (error) {
      setError(error.message);
    }
  }, [i]);

  return [movies, error, fetchMoviesHandler];
};

export default useFetchMovies;
