import React from "react";
import styles from "./Footer.module.css";
const Footer = React.memo(function Footer() {
  return (
    <div className={styles.main}>
      <p>
        По всем вопросам <b> 8 (700) 989 99 99 </b> по будням с 9 до 17 по МСК.
        <span className={styles.desktop}>Бесплатно по России</span>
      </p>
      <span className={styles.mobile}> Бесплатно по России</span>
    </div>
  );
});

export default Footer;
