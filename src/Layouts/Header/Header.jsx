import React from "react";
import logo from "../../Assets/Logo/abccontrol.png";
import styles from "../../Assets/Styles/Header.module.css";

const Header = () => {
  return (
    <nav class={styles.navigation}>
      <p>
        <a href="https://abccontrol.ro/">
          <img src={logo} alt="Logo ABC Control"></img>
        </a>
      </p>
    </nav>
  );
};

export default Header;
