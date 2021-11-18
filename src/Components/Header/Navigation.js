import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import style from "./Navigation.module.css";
import AuthContext from "../../store/AuthContext";

const Navigation = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <nav className={style.headerContainer}>
      <ul className={style.navContainer}>
        {ctx.loggedIn && (
          <li>
            <NavLink activeClassName={style.selectedLink} to="/createclass">
              Create Class
            </NavLink>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <NavLink activeClassName={style.selectedLink} to="/makeparty">
              Make Party
            </NavLink>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <NavLink activeClassName={style.selectedLink} to="/redux">
              Redux Practice
            </NavLink>
          </li>
        )}
        {ctx.loggedIn && (
          <li>
            <button className={style.btn} onClick={ctx.onLogout}>
              <Link to="/Login">Logout</Link>
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
