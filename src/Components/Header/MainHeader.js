import React from "react";
import style from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={style.headerContainer}>
      <h1 className={style.title}>Practice React Project</h1>
      <Navigation />
    </header>
  );
};

export default MainHeader;
