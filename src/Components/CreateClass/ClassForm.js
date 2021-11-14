import React, { useState } from "react";
import useFormHandler from "../../hooks/form-handler";
import "./ClassForm.css";

const ClassForm = function (props) {
  const {
    input: name,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
  } = useFormHandler();
  const {
    input: newAbility,
    inputChangeHandler: abilityChangeHandler,
    reset: resetAbility,
  } = useFormHandler();
  const {
    input: upgrade,
    inputChangeHandler: upgradeChangeHandler,
    reset: resetUpgrade,
  } = useFormHandler();
  // const [name, setName] = useState("");
  // const [newAbility, setAbility] = useState("");
  // const [upgrade, setUpgrade] = useState("");
  // const abilityChangeHandler = function (event) {

  //   setAbility(event.target.value);
  // };

  // const nameChangeHandler = function (event) {

  //   setName(event.target.value);
  // };

  // const upgradeChangeHandler = function (event) {

  //   setUpgrade(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: name,
      ability: newAbility,
      upgrade: upgrade,
      type: "create",
    };

    props.onInfoChange(userData);
    resetName("");
    resetAbility("");
    resetUpgrade("");
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
