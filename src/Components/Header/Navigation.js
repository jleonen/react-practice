import React from "react";

import style from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={style.headerContainer}>
      <ul className={style.navContainer}>
        {props.isLoggedIn && (
          <li>
            <a href="/">Create Class</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <a href="/">Make Party</a>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <button className={style.btn} onClick={props.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
