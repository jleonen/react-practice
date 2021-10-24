import React from "react";
import MemberInfo from "./MemberInfo";
import "./RenderMembers.css";

const RenderMembers = function (props) {
  return (
    <div className="container-grid">
      {props.items.map((members) => (
        <MemberInfo
          key={members.id}
          name={members.name}
          class={members.class}
        />
      ))}
    </div>
  );
};

export default RenderMembers;
