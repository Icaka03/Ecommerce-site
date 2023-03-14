import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export default function Navbar() {
  const [accountLink, setAccountLink] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setAccountLink(user ? "/account" : "/register");
  });
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="default.asp">Pages</a>
          </li>
          <li>
            <a href="default.asp">Shop</a>
          </li>
          <li>
            <a href="default.asp">Blog</a>
          </li>
          <li>
            <a href="default.asp">Contact</a>
          </li>
        </ul>
      </nav>
      <img src={logo} alt="logo" className={styles.logo} />
      <ul>
        <li>
          <a href="default.asp">Shops</a>
        </li>
        <li>
          <Link to={accountLink}>Account</Link>
        </li>
      </ul>
    </div>
  );
}