import React, { useState } from "react";
import useFormHandler from "../../hooks/form-handler";
import styles from "./ClassForm.module.css";

const ClassForm = function (props) {
  const {
    input: name,
    inputChangeHandler: nameChangeHandler,
    reset: resetName,
    validInput: validName,
    validateValue: validateName,
  } = useFormHandler();
  const {
    input: newAbility,
    inputChangeHandler: abilityChangeHandler,
    validInput: validAbility,
    validateValue: validateAbility,
    reset: resetAbility,
  } = useFormHandler();
  const {
    input: upgrade,
    inputChangeHandler: upgradeChangeHandler,
    validInput: validUpgrade,
    validateValue: validateUpgrade,
    reset: resetUpgrade,
  } = useFormHandler();

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
    <div className={styles.container}>
      <h2>Create your own class</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label>Enter Class Name</label>
          <input
            value={name}
            className={!validName && styles.errorInput}
            onChange={nameChangeHandler}
            onBlur={validateName}
          />
          {!validName && (
            <span className={styles.error}>Name cannot be empty. </span>
          )}
        </div>
        <div>
          <label>Select your ability</label>
          <input
            value={newAbility}
            className={!validAbility && styles.errorInput}
            onChange={abilityChangeHandler}
            onBlur={validateAbility}
          ></input>
          {!validAbility && (
            <span className={styles.error}>Ability cannot be empty. </span>
          )}
        </div>
        <div>
          <label>Enter Upgraded Class</label>
          <input
            value={upgrade}
            className={!validUpgrade && styles.errorInput}
            onChange={upgradeChangeHandler}
            onBlur={validateUpgrade}
          />
          {!validUpgrade && (
            <span className={styles.error}>Upgrade cannot be empty.</span>
          )}
        </div>
        <button type="submit">Submit class</button>
      </form>
    </div>
  );
};

export default ClassForm;
