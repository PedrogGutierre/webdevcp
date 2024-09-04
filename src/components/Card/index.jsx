import PropTypes from "prop-types";
import styles from "./Card.module.css";

function Card({ index, title, desc, icon, color }) {
  return (
    <div className={styles.card} style={{ backgroundColor: color }}>
      <img src={icon} alt="" />
      <h2>{index.toString().padStart(2, "0")}</h2>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

Card.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Card;
