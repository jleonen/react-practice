import React from "react";
import "./ClassInfo.css";

function ClassInfo(props) {
  return (
    <div className="class-info">
      <h2>Class:{props.name}</h2>
      <p>Ability:{props.ability}</p>
      <p>Upgraded Class:{props.upgrade}</p>
    </div>
  );
}

export default ClassInfo;
