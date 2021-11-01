import React, { useState } from "react";

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
