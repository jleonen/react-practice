import React, { useState } from "react";
import styles from "./UserClass.module.css";
import useFormHandler from "../../hooks/form-handler";

let partyCount = 0;
let heading = "Create your party. Maximum amount of members is 4.";
const UserClass = function (props) {
  const [validName, setValidName] = useState(true);
  const [validClass, setValidClass] = useState(true);
  const {
    input: name,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useFormHandler();
  const {
    input: newClass,
    inputChangeHandler: classChangeHandler,
    reset: resetClass,
  } = useFormHandler();

  const validateName = () => {
    if (name.trim().length > 0) {
      setValidName(true);
    } else {
      setValidName(false);
    }
  };

  const validateClass = () => {
    if (!newClass) {
      setValidClass(false);
    } else {
      setValidClass(true);
    }
  };
  //REPLACED WITH CUSTOM HOOK
  // const [name, setName] = useState("");
  // const [newClass, setClass] = useState("");

  // const nameChangeHandler = function (event) {
  //   setName(event.target.value);
  // };

  // const classChangeHandler = function (event) {
  //   setClass(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    validateName();
    validateClass();
    if (newClass && name.trim().length > 0) {
      partyCount++;
      const userData = {
        name: name,
        class: newClass,
        type: "party",
      };
      props.onChangeData(userData);
    } else {
      return;
    }

    // setName("");
    resetName();
    //setClass("");
    resetClass();

    heading = partyCount >= 4 ? "Full party!" : heading;
  };

  return (
    <div className="container">
      <h2>{heading}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label className={partyCount >= 4 ? styles.hidden : ""}>
            Enter your name
          </label>
          <input
            className={partyCount >= 4 ? styles.hidden : ""}
            value={name}
            onChange={nameChangeHandler}
          />
          {!validName && <span>Name cannot be blank</span>}
        </div>
        <div>
          <label className={partyCount >= 4 ? styles.hidden : ""}>
            Select your class
          </label>

          <select
            className={partyCount >= 4 ? styles.hidden : ""}
            onChange={classChangeHandler}
          >
            <option value="">Choose a class</option>
            {props.classes.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          {!validClass && <span>Choose a class!</span>}
        </div>
        <button className={partyCount >= 4 ? styles.hidden : ""} type="submit">
          Submit class
        </button>
      </form>
    </div>
  );
};

export default UserClass;
