import React from "react";

import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header>
      <h1>React Project with FF</h1>
      <Navigation isLoggedIn={props.login} onLogout={props.onLogout} />
    </header>
  );
};

export default MainHeader;
