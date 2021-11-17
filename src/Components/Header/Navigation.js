import React, { useContext } from "react";

import style from "./Navigation.module.css";
import AuthContext from "../../store/AuthContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={style.headerContainer}>
      <ul className={style.navContainer}>
        {ctx.loggedIn && (
          <li>
            <a href="/createclass">Create Class</a>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <a href="/makeparty">Make Party</a>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <button className={style.btn} onClick={ctx.onLogout}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
