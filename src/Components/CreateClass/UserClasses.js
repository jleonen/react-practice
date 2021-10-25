import React from "react";
import ClassForm from "./ClassForm";

const UserClasses = function (props) {
  const renderUserInfo = function (data) {
    const userData = {
      ...data,
      id: Math.random().toString(),
    };

    props.addInfo(userData);
  };

  return <ClassForm onInfoChange={renderUserInfo} />;
};

export default UserClasses;
