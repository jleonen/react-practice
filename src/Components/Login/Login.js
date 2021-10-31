import React, { useState } from "react";
import style from "./Login.module.css";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [valid, setValid] = useState(false);

  const usernameHandler = (event) => {
    setUsername(event.target.value);

    setValidUser(event.target.value.trim().length > 4);
  };

  const passwordHander = (event) => {
    setPassword(event.target.value);

    setValidPass(event.target.value.trim().length > 4);
  };

  const validHandler = (event) => {
    if (username.length > 4 && password.length > 4) {
      setValid(true);
    } else {
      setValid(false);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    validUser && validPass && props.onLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          className={!validUser ? style.error : ""}
          type="text"
          id="username"
          value={username}
          onChange={usernameHandler}
        />
        {!validUser && <span>Invalid User!</span>}
      </div>
      <div>
        <label>Password</label>
        <input
          className={!validPass ? style.error : ""}
          type="text"
          id="username"
          value={password}
          onChange={passwordHander}
        />
        {!validPass && <span>Invalid Password!</span>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
