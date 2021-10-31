import React, { useState, useReducer } from "react";
import style from "./Login.module.css";

const usernameReducer = (state, action) => {
  if (action.type === "user") {
    return { value: action.value, isValid: action.value.trim().length > 4 };
  }
  if (action.type === "blur") {
    return { value: state.value, isValid: state.value.trim().length > 4 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [password, setPassword] = useState("");
  const [validPass, setValidPass] = useState(false);
  const [valid, setValid] = useState(false);

  const [usernameState, dispatchUser] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const usernameHandler = (event) => {
    // setUsername(event.target.value);
    dispatchUser({ type: "user", value: event.target.value });

    setValid(usernameState.isValid && password.length > 4);
  };

  const validateUsername = (event) => {
    dispatchUser({ type: "blur" });
  };

  const passwordHander = (event) => {
    setPassword(event.target.value);

    setValid(event.target.value.trim().length > 4 && usernameState.isValid);
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
    valid && props.onLogin(usernameState.value, password);
    // setUsername("");
    // setPassword("");
  };

  return (
    <div>
      <h2 className={style.heading}>Enter login information</h2>
      <form onSubmit={submitHandler} className={style.formContainer}>
        <div>
          <label>Username</label>
          <input
            className={usernameState.isValid === false ? style.error : ""}
            type="text"
            id="username"
            value={usernameState.value}
            onChange={usernameHandler}
            onBlur={validateUsername}
          />
        </div>
        {usernameState.isValid === false ? <span>Invalid User!</span> : ""}
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
