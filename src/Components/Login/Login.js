import React, { useState, useReducer, useEffect } from "react";
import style from "./Login.module.css";
import AuthContext from "../../store/AuthContext";
import { useContext } from "react/cjs/react.development";
import { useHistory } from "react-router-dom";

//USERNAME REDUCER
const usernameReducer = (state, action) => {
  if (action.type === "user") {
    return { value: action.value, isValid: action.value.trim().length > 4 };
  }
  if (action.type === "blur") {
    return { value: state.value, isValid: state.value.trim().length > 4 };
  }
  return { value: "", isValid: false };
};

//PASSWORD REDUCER
const passwordReducer = (state, action) => {
  if (action.type === "password") {
    return { value: action.value, isValid: action.value.trim().length > 4 };
  }

  if (action.type === "blur") {
    return { value: state.value, isValid: state.value.trim().length > 4 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const ctx = useContext(AuthContext);
  const history = useHistory();
  // const [username, setUsername] = useState("");
  // const [validUser, setValidUser] = useState(false);
  // const [password, setPassword] = useState("");
  // const [validPass, setValidPass] = useState(false);
  const [valid, setValid] = useState(false);

  const [usernameState, dispatchUser] = useReducer(usernameReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPass] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: usernameValid } = usernameState;
  const { isValid: passwordValid } = passwordState;
  useEffect(() => {
    const inputTime = setTimeout(() => {
      setValid(usernameValid && passwordValid);
    }, 500);

    return () => {
      clearTimeout(inputTime);
    };
  }, [usernameValid, passwordValid]);

  //USERNAME INPUT FUNCTIONS
  const usernameHandler = (event) => {
    // setUsername(event.target.value);
    dispatchUser({ type: "user", value: event.target.value });

    // setValid(usernameState.isValid && passwordState.isValid);
  };

  const validateUsername = (event) => {
    dispatchUser({ type: "blur" });
  };

  //PASSWORD INPUT FUNCITONS
  const passwordHandler = (event) => {
    // setPassword(event.target.value);
    dispatchPass({ type: "password", value: event.target.value });

    // setValid(passwordState.isValid && usernameState.isValid);
  };

  const validatePassword = () => {
    dispatchPass({ type: "blur" });
  };

  //   const validHandler = (event) => {
  //     if (username.length > 4 && password.length > 4) {
  //       setValid(true);
  //     } else {
  //       setValid(false);
  //     }
  //   };

  //FORM SUBMISSION FUNCTION
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Login submitted");
    valid && ctx.onLogin(usernameState.value, passwordState.value);
    // setUsername("");
    // setPassword("");
  };

  return (
    <div className={style.container}>
      <form onSubmit={submitHandler} className={style.formContainer}>
        <h2 className={style.heading}>Enter login information</h2>
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
            className={passwordState.isValid === false ? style.error : ""}
            type="text"
            id="password"
            value={passwordState.value}
            onChange={passwordHandler}
            onBlur={validatePassword}
          />
        </div>
        {passwordState.isValid === false ? <span>Invalid Password!</span> : ""}
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
