import React, { useState } from "react";
import useFormHandler from "../../hooks/form-handler";
import "./ClassForm.css";

const ClassForm = function (props) {
  const [validName, setValidName] = useState(true);
  const [validAbility, setValidAbility] = useState(true);
  const [validUpgrade, setValidUpgrade] = useState(true);

  const {
    input: name,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
    //validInput: validName,
    //validateValue: validateName,
  } = useFormHandler();
  const {
    input: newAbility,
    inputChangeHandler: abilityChangeHandler,
    //validInput: validAbility,
    //validateValue: validateAbility,
    reset: resetAbility,
  } = useFormHandler();
  const {
    input: upgrade,
    inputChangeHandler: upgradeChangeHandler,
    //validInput: validUpgrade,
    //validateValue: validateUpgrade,
    reset: resetUpgrade,
  } = useFormHandler();

  const validateName = () => {
    if (name.trim().length > 0) {
      setValidName(true);
    } else {
      console.log("invalid name");
      setValidName(false);
    }
  };

  const validateAbility = () => {
    if (newAbility.trim().length > 0) {
      setValidAbility(true);
    } else {
      console.log("invalid ability");
      setValidAbility(false);
    }
  };
  const validateUpgrade = () => {
    if (upgrade.trim().length > 0) {
      setValidUpgrade(true);
    } else {
      setValidUpgrade(false);
    }
  };

  //REPLACED WITH CUSTOM HOOK
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

    validateName();
    validateAbility();
    validateUpgrade();

    const userData = {
      name: name,
      ability: newAbility,
      upgrade: upgrade,
      type: "create",
    };

    const formValid =
      name.trim().length > 0 &&
      newAbility.trim().length > 0 &&
      upgrade.trim().length > 0;
    formValid && props.onInfoChange(userData);
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
          <input
            value={name}
            onChange={nameChangeHandler}
            onBlur={validateName}
          />
          {/* {!name.trim().length > 0 && <span>Name cannot be empty. </span>} */}
          {!validName && <span>Name cannot be empty. </span>}
        </div>
        <div>
          <label>Select your ability</label>
          <input
            value={newAbility}
            onChange={abilityChangeHandler}
            onBlur={validateAbility}
          ></input>
          {/* {!newAbility.trim().length > 0 && (
            <span>Ability cannot be empty. </span>
          )} */}
          {!validAbility && <span>Ability cannot be empty. </span>}
        </div>
        <div>
          <label>Enter Upgraded Class</label>
          <input
            value={upgrade}
            onChange={upgradeChangeHandler}
            onBlur={validateUpgrade}
          />
          {/* {!upgrade.trim().length > 0 && <span>Upgrade cannot be empty. </span>} */}
          {!validUpgrade && <span>Upgrade cannot be empty. </span>}
        </div>
        <button type="submit">Submit class</button>
      </form>
    </div>
  );
};

export default ClassForm;
