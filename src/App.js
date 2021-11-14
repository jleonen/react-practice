import "./App.css";
import RenderClass from "./Components/CreateClass/RenderClasses";
// import ClassForm from "./ClassForm";
import Login from "./Components/Login/Login";
import { useContext, useState } from "react";
import UserClasses from "./Components/CreateClass/UserClasses";
import UserParty from "./Components/CreateParty/UserParty";
import RenderMembers from "./Components/CreateParty/RenderMembers";
import MainHeader from "./Components/Header/MainHeader";
import AuthContext from "./store/AuthContext";
import Message from "./Components/Redux/Message";
import Passcode from "./Components/Redux/Passcode";

function App() {
  const ctx = useContext(AuthContext);
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
      {!ctx.loggedIn && <Login />}
      {ctx.loggedIn && <MainHeader />}
      {ctx.loggedIn && <UserClasses addInfo={addClass} />}
      {ctx.loggedIn && <RenderClass items={classes} />}
      {ctx.loggedIn && (
        <UserParty onChangeMember={renderMember} classNames={classes} />
      )}
      {ctx.loggedIn && <RenderMembers items={member} />}
      {ctx.loggedIn && <Passcode />}
      {ctx.loggedIn && <Message />}
    </div>
  );
}

export default App;
