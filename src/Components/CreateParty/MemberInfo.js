import React from "react";
import "./MemberInfo.css";
import Info from "../UI/Info";

const MemberInfo = function (props) {
  return (
    <Info>
      <div className="member-info">
        <h2>Name: {props.name}</h2>
        <p>Class: {props.class}</p>
      </div>
    </Info>
  );
};

export default MemberInfo;
