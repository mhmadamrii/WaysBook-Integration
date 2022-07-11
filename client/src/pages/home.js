import Navbar from "../components/navbar/navbar";
import NavbarAuth from "../components/navbar/navAuth"
import Background from "../components/background/bg";
import Book from "../components/card/book";
import styles from "../css/home.module.css";
import Card from "../components/card/slide";
import LoginModal from "../components/auth/login"
import RegisterModal from "../components/auth/register"
import NotifModal from '../components/card/addCart'
import {useState, useContext} from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";



export default function Home() {

  const [login, setLogin] = useState(false)
  const [register, setRegister] = useState(false)
  const [notif, setNotif] = useState(false)

  const title = 'Books';
  document.title = 'DumbMerch | ' + title;

  const [state] = useContext(UserContext)

  return (
    <div>
      <div className={styles.bgWhite}></div>
      <Background />
      {state?.isLogin === true ? <NavbarAuth/> : <Navbar setLogin={setLogin} setRegister={setRegister}/>}
      <div className={styles.heading}>
        <h1>
          With us, you can shop online & help save your high street at the same
          time
        </h1>
      </div>
      <div className={styles.slider}>
        <Card setNotif={setNotif} />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className={styles.listBook}>
        <div className={styles.title}>
          <h1>List Book</h1>
        </div>
        <div className={styles.book}>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </div>
      
      </div>
      {login && <LoginModal setLogin={setLogin} setRegister={setRegister}/>}
      {register && <RegisterModal setLogin={setLogin} setRegister={setRegister}/>}
      {notif && <NotifModal setNotif={setNotif} />}
    </div>
  );
}
