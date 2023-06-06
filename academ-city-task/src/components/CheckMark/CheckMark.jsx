import React from "react";
import styles from "./CheckMark.module.css";
import checkmark from "../../assets/CheckMark/checkmark.svg"

const CheckMark = React.memo(function CheckMark({ children }) {
  return (
    <div className={styles.main}>
      <div>
        <img src={checkmark} alt="" />
      </div>
      <p className={styles.text}> {children}</p>
    </div>
  );
});

export default CheckMark;
