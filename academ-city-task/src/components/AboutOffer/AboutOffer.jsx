import React from "react";
import styles from "./AboutOffer.module.css";

const Promotion = React.memo(function Promotion(props) {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Мы делаем обучение еще выгоднее для вас!
        </h1>
        <div className={`${styles.desktop} ${styles.discount}`}>
          Скидка <b>-43%</b>
        </div>
        <div className={`${styles.mobile} ${styles.discount}`}>-43%</div>
      </div>
      <div className={styles.about_price}>
        <div className={styles.text}>
          Зафиксируйте <b>скидку</b>
          <br /> на все обучения!
        </div>
        <div className={styles.prices}>
          <div className={styles.old_price}>
            <strike>46 000</strike>
            <span>/за семестр</span>
          </div>
          <div className={styles.new_price}>26 900₽</div>
        </div>
      </div>
    </div>
  );
});

export default Promotion;
