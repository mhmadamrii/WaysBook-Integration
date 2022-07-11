import React from "react";
import styles from "../css/detail.module.css";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";
import book from "../assets/book/book1.png";
import cart from "../assets/icons/cartwhite.png";

export default function Detail() {
  return (
    <div>
      <Bg />
      <Navbar />
      <div className={styles.bookDetailContainer}>
        <div className={styles.top}>
          <div className={styles.left}>
            <img src={book} />
          </div>
          <div className={styles.right}>
            <div className={styles.title}>Boys do write love letters</div>
            <div className={styles.author}>
              <i>By Kansa Airlangga</i>
            </div>
            <div className={styles.date}>
              <h2>Publication date</h2>
              <p>25 Februari 2018</p>
            </div>
            <div className={styles.pages}>
              <h2>Pages</h2>
              <p>260</p>
            </div>
            <div className={styles.ISBN}>
              <h2>ISBN</h2>
              <p>9786024529048</p>
            </div>
            <div className={styles.price}>
              <h2>Price</h2>
              <p>Rp59.000</p>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <h1>About This Book</h1>
          <div className={styles.desc}>
            <p>
              Shenaya mulai percaya, bahwa bukan hanya anak perempuan yang suka
              menulis. Sebab gadis itu menemukan surat-surat tersebut di
              lokernya yang tak pernah dikunci. Ia pikir, semuanya adalah surat
              salah kirim dari seorang siswi, sampai akhirnya Shenaya temukan
              kode jelas tentang siapa yang menuliskan semuanya.
            </p>
            <br />
            <p>
              Namun permasalahannya adalah, Shenaya sudah lebih dulu menyukai
              Dipo jauh sebelum surat-suratnya datang. Dan permasalahannya lagi
              adalah, Argado datang entah atas perintah siapa. Hati Shenaya
              semakin bimbang.
            </p>
            <br />
            <p>
              Nanti, setelah puluhan surat datang, setelah Argado semakin dekat,
              dan setelah Dipo tetap tidak berkutik, Shenaya akhirnya tahu, ke
              mana hatinya harus jatuh.
            </p>
          </div>
          <button>
            Add Cart <img src={cart} />
          </button>
        </div>
      </div>
    </div>
  );
}
