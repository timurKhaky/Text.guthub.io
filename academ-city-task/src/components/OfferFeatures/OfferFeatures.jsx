import React from "react";
import CheckMark from "../CheckMark/CheckMark";
import styles from "./OfferFeatures.module.css";
const OfferFeatures = React.memo(function OfferFeatures() {
  return (
    <div className={styles.main}>
      <div className={styles.features_list}>
        <CheckMark>Возможность получить налоговый вычет — 13%</CheckMark>
        <CheckMark>Кредит на обучение с господдержкой</CheckMark>
      </div>
    </div>
  );
});

export default OfferFeatures;
