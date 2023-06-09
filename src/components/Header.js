import React, { useState } from "react";
import { Link } from "react-router-dom";
import model from "../images/model.png";
import styles from "../styles/Header.module.css";
import logo from "../images/logo.png";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function Header() {
  const [accountLink, setAccountLink] = useState("");
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    setAccountLink(user ? "/account" : "/register");
  });
  return (
    <section>
      <div className={styles.main_section}>
        <div className={styles.left_side}>
          <div className={styles.content}>
            <p>Just Dropped</p>
            <h1>
              Feel<br></br>
              Authentic<br></br>
              Peace
            </h1>
            <button>Shop Now </button>
          </div>
        </div>
        <div className={styles.right_side}>
          <img src={model} alt="model" />
        </div>
      </div>
    </section>
  );
}
