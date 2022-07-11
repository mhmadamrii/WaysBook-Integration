import styles from "../../css/cart.module.css";
import book from "../../assets/book/book1.png";
import del from "../../assets/icons/trash.png";

export default function Cart() {
  return (
    <div className={styles.myCart}>
      <div className={styles.left}>
        <img src={book} alt="" />
      </div>
      <div className={styles.right}>
        <div className={styles.title}>
          <h1>Boys Do Write Love Letters</h1>
          <button>
            <img src={del} alt="" />
          </button>
        </div>
        <div className={styles.author}>
          <i>By Kansa Airlangga</i>
        </div>
        <div className={styles.price}>
          <p>Rp59.000</p>
        </div>
      </div>
    </div>
  );
}
