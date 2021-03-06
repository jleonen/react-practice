import React from "react";
import UserClass from "./UserClass";

const UserParty = function (props) {
  const renderData = function (data) {
    const userData = {
      ...data,
      id: Math.random().toString(),
    };
    console.log(userData.type);
    props.onChangeMember(userData);
  };

  return <UserClass onChangeData={renderData} classes={props.classNames} />;
};

export default UserParty;
