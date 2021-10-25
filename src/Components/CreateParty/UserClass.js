import React, { useState } from "react";
import styles from "./UserClass.module.css";

let partyCount = 0;
let heading = "Create your party. Maximum amount of members is 4.";
const UserClass = function (props) {
  const [name, setName] = useState("");
  const [newClass, setClass] = useState("");

  const nameChangeHandler = function (event) {
    setName(event.target.value);
  };

  const classChangeHandler = function (event) {
    setClass(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    partyCount++;
    const userData = {
      name: name,
      class: newClass,
      type: "party",
    };

    props.onChangeData(userData);

    setName("");
    setClass("");

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
        </div>
        <div>
          <label className={partyCount >= 4 ? styles.hidden : ""}>
            Select your class
          </label>

          <select
            className={partyCount >= 4 ? styles.hidden : ""}
            onChange={classChangeHandler}
          >
            <option value="warrior">Warrior</option>
            <option value="monk">Monk</option>
            <option value="black mage">Black Mage</option>
            <option value="white mage">White Mage</option>
          </select>
        </div>
        <button className={partyCount >= 4 ? styles.hidden : ""} type="submit">
          Submit class
        </button>
      </form>
    </div>
  );
};

export default UserClass;
