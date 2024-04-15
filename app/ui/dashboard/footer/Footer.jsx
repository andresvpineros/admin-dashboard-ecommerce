import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>TecnoMaster</div>
      <div className={styles.text}>© Todos los derechos reservados.</div>
    </div>
  );
};

export default Footer;
