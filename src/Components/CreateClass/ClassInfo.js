import React from "react";
import "./ClassInfo.css";
import Info from "../UI/Info";

function ClassInfo(props) {
  return (
    <Info>
      <div className="class-info">
        <h2>Class:{props.name}</h2>
        <p>Ability:{props.ability}</p>
        <p>Upgraded Class:{props.upgrade}</p>
      </div>
    </Info>
  );
}

export default ClassInfo;
