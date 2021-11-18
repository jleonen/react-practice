import React, { useContext } from "react";
import { Link } from "react-router-dom";

import style from "./Navigation.module.css";
import AuthContext from "../../store/AuthContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={style.headerContainer}>
      <ul className={style.navContainer}>
        {ctx.loggedIn && (
          <li>
            <Link to="/createclass">Create Class</Link>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <Link to="/makeparty">Make Party</Link>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <Link to="/redux">Redux Practice</Link>
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
