import "./App.css";
import RenderClass from "./RenderClasses";
// import ClassForm from "./ClassForm";
import { useState } from "react";
import UserClasses from "./UserClasses";
import UserParty from "./UserParty";
import RenderMembers from "./RenderMembers";

function App() {
  const classesFF = [
    {
      id: "c1",
      name: "Warrior",
      ability: "Guard",
      upgrade: "Knight",
    },
    {
      id: "c2",
      name: "Monk",
      ability: "Kick",
      upgrade: "Master",
    },
    {
      id: "c3",
      name: "Black Mage",
      ability: "Fire",
      upgrade: "Black Wizard",
    },
    {
      id: "c4",
      name: "White Mage",
      ability: "Cure",
      upgrade: "White Wizard",
    },
  ];

  const partyMembers = [];
  const [classes, setClasses] = useState(classesFF);
  const addClass = (classFF) => {
    console.log(classFF);
    setClasses((prevClass) => {
      return [classFF, ...prevClass];
    });
  };

  const [member, setMember] = useState(partyMembers);
  const renderMember = function (member) {
    setMember((prevMember) => {
      return [member, ...prevMember];
    });
  };

  return (
    <div>
      <UserClasses addInfo={addClass} />
      <RenderClass items={classes} />;
      <UserParty onChangeMember={renderMember} />
      <RenderMembers items={member} />
    </div>
  );
}

export default App;
