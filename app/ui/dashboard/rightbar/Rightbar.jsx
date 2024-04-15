import Image from "next/image";
import styles from "./Rightbar.module.css";
import { MdArrowCircleRight, MdPlayCircleFilled } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Descuentos Amazon</span>
          <h3 className={styles.title}>Acceda a los mejores descuentos</h3>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className={styles.button}>
            <MdArrowCircleRight />
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
