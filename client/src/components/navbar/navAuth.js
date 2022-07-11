import styles from "../../css/nav.module.css";
import logo from "../../assets/icons/logo.png";
import profile from "../../assets/temp/profile.jpg";
import cart from "../../assets/icons/cart.png";
import { Link } from "react-router-dom";
import Dropdown from "./dropdown";
import { useState } from "react";

export default function Navbar() {
  const [drop, setDrop] = useState(false);

  return (
    <div className={styles.navContainer}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className={styles.right}>
        <Link to="/cart">
          <img className={styles.cart} src={cart} alt="" />
        </Link>
        {drop ? (
          <button onClick={() => setDrop(false)}>
            <img className={styles.profile} src={profile} alt="" />
          </button>
        ) : (
          <button onClick={() => setDrop(true)}>
            <img className={styles.profile} src={profile} alt="" />
          </button>
        )}
      </div>
      <div className={styles.notification}>1</div>
      {drop && <Dropdown />}
    </div>
  );
}
