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

    setValid(event.target.value.trim().length > 4 && password.length > 4);
  };

  const validateUsername = (event) => {
    setValidUser(username.length > 4);
  };

  const passwordHander = (event) => {
    setPassword(event.target.value);

    setValid(event.target.value.trim().length > 4 && username.length > 4);
  };

  const validatePassword = () => {
    setValidPass(password.length > 4);
  };

  //   const validHandler = (event) => {
  //     if (username.length > 4 && password.length > 4) {
  //       setValid(true);
  //     } else {
  //       setValid(false);
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault();
    valid && props.onLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2 className={style.heading}>Enter login information</h2>
      <form onSubmit={submitHandler} className={style.formContainer}>
        <div>
          <label>Username</label>
          <input
            className={!validUser ? style.error : ""}
            type="text"
            id="username"
            value={username}
            onChange={usernameHandler}
            onBlur={validateUsername}
          />
        </div>
        {!validUser && <span>Invalid User!</span>}
        <div>
          <label>Password</label>
          <input
            className={!validPass ? style.error : ""}
            type="text"
            id="username"
            value={password}
            onChange={passwordHander}
            onBlur={validatePassword}
          />
        </div>
        {!validPass && <span>Invalid Password!</span>}
        {valid && (
          <button className={style.button} type="submit">
            Get started!
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
