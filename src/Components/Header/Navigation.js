import React from "react";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
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
            <button onClick={props.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
