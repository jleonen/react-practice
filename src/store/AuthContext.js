import React, { useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";

const AuthContext = React.createContext({
  loggedIn: false,
  onLogout: () => {},
  onLogin: (username, password) => {},
});

export const AuthContextProvider = (props) => {
  const [loggedIn, setLogin] = useState(false);
  const history = useHistory();

  const loginHandler = () => {
    console.log("Logged in");
    setLogin(true);
    console.log(loggedIn);
    history.push("/welcome");
  };

  const logoutHandler = () => {
    setLogin(false);
    history.push("/Login");
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
