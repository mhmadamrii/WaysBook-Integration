import styles from "../css/profile.module.css";
import Navbar from "../components/navbar/navAuth";
import Bg from "../components/background/bg";

import mail from "../assets/icons/mail.png";
import phone from "../assets/icons/phone.png";
import gender from "../assets/icons/gender.png";
import location from "../assets/icons/location.png";
import profile from "../assets/temp/profile.jpg";

import Book from "../components/card/bookProf";

export default function Profile() {
  return (
    <div>
      <Bg />
      <Navbar />
      <div className={styles.profileContainer}>
        <div className={styles.top}>
          <h1>Profile</h1>
          <div className={styles.profile}>
            <div className={styles.left}>
              <div className={styles.email}>
                <img src={mail} />
                <div className={styles.val}>
                  <h3>alvienuryahya@gmail.com</h3>
                  <p>Email</p>
                </div>
              </div>
              <div className={styles.gender}>
                <img src={gender} />
                <div className={styles.val}>
                  <h3>Male</h3>
                  <p>Gender</p>
                </div>
              </div>
              <div className={styles.phone}>
                <img src={phone} />
                <div className={styles.val}>
                  <h3>0895413416500</h3>
                  <p>Phone</p>
                </div>
              </div>
              <div className={styles.location}>
                <img src={location} />
                <div className={styles.val}>
                  <h3>Jl.Puki Abadi, Depok, Jawa Tengah.</h3>
                  <p>Location</p>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <img src={profile} alt="" />
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <h1>My Books</h1>
          <div className={styles.bookCon}>
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
            <Book />
          </div>
        </div>
      </div>
    </div>
  );
}
