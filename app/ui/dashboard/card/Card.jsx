import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Clientes Totales</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span>
            <span className={styles.positive}>12%</span> más que la semana
            pasada
          </span>
        </span>
      </div>
    </div>
  );
};

export default Card;
