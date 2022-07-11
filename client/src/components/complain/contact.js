import React from "react";
import styles from "../../css/complain.module.css";
import profile from "../../assets/temp/profile.jpg";

export default function Contact() {
  return (
    <div>
      <div className={styles.contact}>
        <img src={profile} />
        <p>Ananda Rizky Alvie Nuryahya</p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}
