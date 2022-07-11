import styles from "../../css/card.module.css";
import pic from "../../assets/book/book2.png";

export default function Slide({setNotif}) {
  return (
    <div className={styles.container}>
      <div className={styles.slideCard}>
        <div className={styles.left}>
          <img src={pic}></img>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>
            <h4>Sebuah seni untuk bersikap bodoamat</h4>
          </div>
          <div className={styles.author}>
            <i>By Mark Manson</i>
          </div>
          <div className={styles.desc}>
            <p>
              "Selama beberapa tahun belakangan, Mark Manson melalui blognya yang sangan populer"
            </p>
          </div>
          <div className={styles.price}>
            <p>Rp59.000</p>
          </div>
          <button onClick={() => setNotif(true)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
