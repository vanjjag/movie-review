import Movie from "./Movie";
import MostPopular from "./MostPopular";
import styles from "./MovieList.module.css";

const MovieList = (props) => {
  const firstMovie = props.movies[0];
  return (
    <div className={styles["movie-list"]}>
      {props.movies.length > 0 && (
        <MostPopular
          title={firstMovie.title}
          backdrop={firstMovie.backdrop}
          releaseDate={firstMovie.releaseDate}
          overview={firstMovie.overview}
          key={firstMovie.id}
        ></MostPopular>
      )}
      <ul>
        {props.movies.slice(1).map((movie) => {
          return (
            <Movie
              title={movie.title}
              poster={movie.poster}
              releaseDate={movie.releaseDate}
              overview={movie.overview}
              key={movie.id}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
