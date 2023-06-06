import React from "react";
import styles from "./MyButton.module.css";
const Button = ({ variant = "standart", children }) => {
  return (
    <button className={`${styles.btn} ${styles[variant]}`}>{children}</button>
  );
};

export const MyButton = React.memo(Button);
