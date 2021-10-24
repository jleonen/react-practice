import React, { useState } from "react";
import "./UserClass.css";

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

    const userData = {
      name: name,
      class: newClass,
      type: "party",
    };

    props.onChangeData(userData);
    setName("");
    setClass("");
  };

  return (
    <div className="container">
      <h2>Create your party</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter your name</label>
          <input value={name} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Select your class</label>

          <select onChange={classChangeHandler}>
            <option value="warrior">Warrior</option>
            <option value="monk">Monk</option>
            <option value="black mage">Black Mage</option>
            <option value="white mage">White Mage</option>
          </select>
        </div>
        <button type="submit">Submit class</button>
      </form>
    </div>
  );
};

export default UserClass;
