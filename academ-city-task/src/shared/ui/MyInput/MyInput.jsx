import React, { memo } from "react";
import { RequiredPoint } from "../../../components/RequiredPoint/RequiredPoint";
import styles from "./MyInput.module.css";
const Input = ({
  variant = "standart",
  type = "text",
  required = false,
  placeholder = "",
  className
}) => {
  return (
    <label className={`${styles.placeinput} ${className}`}>
      <input required="0" type={type} id="text" className={styles[variant]} />
      <div className={styles.place_holder}>
        {placeholder}
        {required && <RequiredPoint />}
      </div>
    </label>
  );
};

export const MyInput = memo(Input);
