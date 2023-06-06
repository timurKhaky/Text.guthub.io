import React, { memo } from "react";
import styles from "./MySlider.module.css";
const Slider = ({ currentNumber = 1, totalCount = 1, onClick }) => {
  return (
    <div className={styles.main}>
      <button
        onClick={() => onClick(-1)}
        disabled={currentNumber === 1 ? "disabled" : ""}
      >
        ˂
      </button>
      <div className={styles.main}>
        {currentNumber}/{totalCount}
      </div>
      <button
        onClick={() => onClick(+1)}
        disabled={currentNumber === totalCount ? "disabled" : ""}
      >
        ˃
      </button>
    </div>
  );
};

export const MySlider = memo(Slider);
