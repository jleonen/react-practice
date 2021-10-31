import "./App.css";
import RenderClass from "./Components/CreateClass/RenderClasses";
// import ClassForm from "./ClassForm";
import Login from "./Components/Login/Login";
import { useState } from "react";
import UserClasses from "./Components/CreateClass/UserClasses";
import UserParty from "./Components/CreateParty/UserParty";
import RenderMembers from "./Components/CreateParty/RenderMembers";

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
  const [loggedIn, setLogin] = useState(false);

  const loginHandler = () => {
    console.log("Logged in");
    setLogin(true);
  };
  const [classes, setClasses] = useState(classesFF);
  const addClass = (classFF) => {
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
      <Login onLogin={loginHandler} />
      {loggedIn && <UserClasses addInfo={addClass} />}
      {loggedIn && <RenderClass items={classes} />}
      {loggedIn && <UserParty onChangeMember={renderMember} />}
      {loggedIn && <RenderMembers items={member} />}
    </div>
  );
}

export default App;
