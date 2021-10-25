import React from "react";
import "./MemberInfo.css";

const MemberInfo = function (props) {
  return (
    <div className="class-info">
      <h2>Name: {props.name}</h2>
      <p>Class: {props.class}</p>
    </div>
  );
};

export default MemberInfo;
