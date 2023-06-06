import React from "react";
import { MyButton } from "../../shared/ui/MyButton/MyButton";
import { MyInput } from "../../shared/ui/MyInput/MyInput";
import { RequiredPoint } from "../RequiredPoint/RequiredPoint";
import styles from "./Registration.module.css";

const Registration = React.memo(function Registration() {
  return (
    <div className={styles.content}>
      <div className={styles.header}>Проконсультируйтесь со специалистом:</div>
      <div className={styles.content_input_list}>
        <MyInput
          required={true}
          className={styles.formInput}
          placeholder="Ф.И.О"
        />
        <MyInput
          required={true}
          className={styles.formInput}
          placeholder="Телефон"
        />
        <MyInput
          required={true}
          className={styles.formInput}
          placeholder="E-mail"
        />
      </div>

      <div className={styles.agreement_accept}>
        <div>
          <input type="checkbox" />
          <span>Согласен на обработку персональных данных</span>
          <RequiredPoint />
        </div>
      </div>
      
      <div className={styles.hints}>
        <RequiredPoint />
        Поля, обязательные для заполнения
      </div>
      <div className={styles.btn_accept}>
        <MyButton>Получить консультацию</MyButton>
      </div>
    </div>
  );
});

export default Registration;
