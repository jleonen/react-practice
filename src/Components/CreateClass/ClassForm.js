import React, { useState } from "react";
import "./ClassForm.css";

const ClassForm = function (props) {
  const [name, setName] = useState("");
  const [newAbility, setAbility] = useState("");
  const [upgrade, setUpgrade] = useState("");
  const abilityChangeHandler = function (event) {
    // console.log(event.target.value);
    setAbility(event.target.value);
  };

  const nameChangeHandler = function (event) {
    // console.log(event.target.value);
    setName(event.target.value);
  };

  const upgradeChangeHandler = function (event) {
    // console.log(event.target.value);
    setUpgrade(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      ability: newAbility,
      upgrade: upgrade,
      type: "create",
    };

    props.onInfoChange(userData);
    setName("");
    setAbility("");
    setUpgrade("");
  };

  return (
    <div className="container">
      <h2>Create your own class</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter Class Name</label>
          <input value={name} onChange={nameChangeHandler} />
        </div>
        <div>
          <label>Select your ability</label>
          <input value={newAbility} onChange={abilityChangeHandler}></input>
          {/* <select onChange={classChangeHandler}>
            <option value="warrior">Warrior</option>
            <option value="monk">Monk</option>
            <option value="black mage">Black Mage</option>
            <option value="white mage">White Mage</option>
          </select> */}
        </div>
        <div>
          <label>Enter Upgraded Class</label>
          <input value={upgrade} onChange={upgradeChangeHandler} />
        </div>
        <button type="submit">Submit class</button>
      </form>
    </div>
  );
};

export default ClassForm;
