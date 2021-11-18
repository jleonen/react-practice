import React, { useState } from "react";
import { Redirect, Route } from "react-router-dom";

const AuthContext = React.createContext({
  loggedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export const AuthContextProvider = (props) => {
  const [loggedIn, setLogin] = useState(false);

  const loginHandler = () => {
    console.log("Logged in");
    setLogin(true);
  };

  const logoutHandler = () => {
    setLogin(false);
    <Route path="/makeparty">
      <Redirect to="/Login" />
    </Route>;
  };

  return (
    <AuthContext.Provider
      value={{
        loggedIn: loggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
