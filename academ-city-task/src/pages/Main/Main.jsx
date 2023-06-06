import React, { useLayoutEffect, useState } from "react";
import OfferFeatures from "../../components/OfferFeatures/OfferFeatures";
import AboutOffer from "../../components/AboutOffer/AboutOffer";
import Registration from "../../components/Registration/Registration";

import styles from "./Main.module.css";
import Footer from "../../components/Footer/Footer";
import { MySlider } from "../../shared/ui/MySlider/MySlider";
const Main = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.screen.width);
  const [version, setVersion] = useState({
    IsDesctop: false,
    isTablet: false,
    isMobile: false,
  });
  const [page, setPage] = useState(1);
  const handlePageSelect = (count) => {
    setPage(page + count);
  };
  const mobilePages = [
    <AboutOffer />,
    <Registration />,
    <>
      <OfferFeatures />
      <Footer />
    </>,
  ];
  useLayoutEffect(() => {
    window.onresize = () => {
      setWindowWidth(window.screen.width);
    };

    if (windowWidth >= 1150) {
      setVersion({ IsDesctop: true, isTablet: false, isMobile: false });
    }
    if (windowWidth <= 1150 && windowWidth >= 640) {
      setVersion({ IsDesctop: false, isTablet: true, isMobile: false });
    }
    if (windowWidth < 640) {
      setVersion({ IsDesctop: false, isTablet: false, isMobile: true });
    }

    return () => {
      window.onresize = false;
    };
  }, [windowWidth]);

  const desctop = (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.descriptionWrapper}>
          <div className={styles.description}>
            <AboutOffer />
            <OfferFeatures />
            <Footer />
          </div>
        </div>
        <Registration />
      </div>
    </div>
  );
  const tablet = (
    <div className={styles.content}>
      <AboutOffer />
      <Registration />
      <OfferFeatures />
      <Footer />
    </div>
  );
  const mobile = (
    <div className={styles.content}>
      {mobilePages[page - 1]}
      <MySlider
        onClick={handlePageSelect}
        totalCount={mobilePages.length}
        currentNumber={page}
      />
    </div>
  );
  if (version.isTablet) {
    return tablet;
  }
  if (version.isMobile) {
    return mobile;
  }
  return desctop;
};

export default Main;
