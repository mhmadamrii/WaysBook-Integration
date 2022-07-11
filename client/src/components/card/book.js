import pic from "../../assets/book/book1.png";
import styles from "../../css/card.module.css";
import {Link} from 'react-router-dom'

export default function Book() {
  return (
    <div>
      <Link to='/detail'>
      <div className={styles.book}>
        <div className={styles.bookImg}>
          <img src={pic}/>
        </div>
        <div className={styles.cardBody}>
          <div className={styles.title}>
            <h1>Boys do write love letters</h1>
          </div>
          <div className={styles.author}>
            <i>By Kansa Airlangga</i>
          </div>
          <div className={styles.price}>Rp59.000</div>
        </div>
      </div>
      </Link>
    </div>
  );
}
