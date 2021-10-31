import React from "react";
import { useState } from "react/cjs/react.development";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHander = (event) => {
    setPassword(event.target.value);
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
    valid && props.onLogin(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={usernameHandler}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          id="username"
          value={password}
          onChange={passwordHander}
        />
      </div>
    </form>
  );
};
