import React, { useState } from "react";
import styles from "./UserClass.module.css";
import useFormHandler from "../../hooks/form-handler";

let partyCount = 0;
let heading = "Create your party. Maximum amount of members is 4.";
const UserClass = function (props) {
  //name input
  const {
    input: name,
    inputChangeHandler: nameChangeHandler,
    validInput: validName,
    validateValue: validateName,
    reset: resetName,
  } = useFormHandler();

  //class input
  const {
    input: newClass,
    inputChangeHandler: classChangeHandler,
    validInput: validClass,
    validateValue: validateClass,
    reset: resetClass,
  } = useFormHandler();

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
      };
      props.onChangeData(userData);
    }

    resetName();

    resetClass();

    heading = partyCount >= 4 ? "Full party!" : heading;
  };

  return (
    <div className={styles.container}>
      <h2>{heading}</h2>
      <form onSubmit={submitHandler}>
        <div className={partyCount >= 4 ? styles.hidden : ""}>
          <label>Enter your name</label>
          <input
            className={!validName && styles.inputError}
            value={name}
            onChange={nameChangeHandler}
          />
          {!validName && (
            <span className={styles.error}>Name cannot be blank</span>
          )}
        </div>
        <div className={partyCount >= 4 ? styles.hidden : ""}>
          <label>Select your class</label>
          <select onChange={classChangeHandler}>
            <option value="">Choose a class</option>
            {props.classes.map((item) => (
              <option value={item.name}>{item.name}</option>
            ))}
          </select>
          {!validClass && <span className={styles.error}>Choose a class!</span>}
        </div>
        <button className={partyCount >= 4 ? styles.hidden : ""} type="submit">
          Submit class
        </button>
      </form>
    </div>
  );
};

export default UserClass;
