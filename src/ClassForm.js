import React, { useState } from "react";
import "./ClassForm.css";

const ClassForm = function (props) {
  const [name, setName] = useState("");
  const [newClass, setClass] = useState("");
  const classChangeHandler = function (event) {
    console.log(event.target.value);
    setClass(event.target.value);
  };

  const nameChangeHandler = function (event) {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      class: newClass,
    };

    props.onInfoChange(userData);
    setName("");
    setClass("");
  };

  return (
    <div className="container">
      <h2>Choose your class</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter Name</label>
          <input onChange={nameChangeHandler} />
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

export default ClassForm;
