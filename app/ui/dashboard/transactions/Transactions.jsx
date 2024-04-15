import Image from "next/image";
import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Últimos Pedidos</h2>
      <table className={styles.table}>
        <thead>
          <td>Nombre</td>
          <td>Producto</td>
          <td>Cantidad</td>
          <td>Precio</td>
          <td>Fecha</td>
          <td>Estado</td>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>Bombillos Led</td>
            <td>4</td>
            <td>$300</td>
            <td>14/02/2024</td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pendiente
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>Bombillos Led</td>
            <td>4</td>
            <td>$300</td>
            <td>14/02/2024</td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelado
              </span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>Bombillos Led</td>
            <td>4</td>
            <td>$300</td>
            <td>14/02/2024</td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Listo</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
