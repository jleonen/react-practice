import { useState } from "react";

const useMemberHandler = (dataArray) => {
  const [member, setMember] = useState(dataArray);
  const addMember = (members) => {
    setMember((prevMember) => {
      return [members, ...prevMember];
    });
  };
  return {
    member,
    addMember,
  };
};

export default useMemberHandler;
