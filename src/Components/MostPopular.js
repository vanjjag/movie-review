import styles from "./MostPopular.module.css";

const MostPopular = (props) => {
  return (
    <div className={styles["most-popular"]}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${props.backdrop}`}
        alt="poster"
      ></img>

      <div className={styles["text-over-poster"]}>
        <h3>{props.title}</h3>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};

export default MostPopular;
