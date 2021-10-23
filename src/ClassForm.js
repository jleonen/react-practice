import React from "react";
import "./ClassForm.css";

const ClassForm = function () {
  return (
    <div className="container">
      <h2>Choose your class</h2>
      <label>Enter Name</label>
      <input />
      <label>Select your class</label>
      <select>
        <option value="warrior">Warrior</option>
        <option value="monk">Monk</option>
        <option value="black mage">Black Mage</option>
        <option value="white mage">White Mage</option>
      </select>
    </div>
  );
};

export default ClassForm;
