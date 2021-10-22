import React from "react";

function ClassInfo(props) {
  return (
    <div>
      <h2>Class:{props.name}</h2>
      <p>Ability:{props.ability}</p>
      <p>Upgraded Class:{props.upgrade}</p>
    </div>
  );
}

export default ClassInfo;
