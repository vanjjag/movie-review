import styles from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={styles.movie}>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
          alt="poster"
        ></img>
        <h3 className={styles.title}>{props.title}</h3>
      </li>
    </li>
  );
};

export default Movie;
