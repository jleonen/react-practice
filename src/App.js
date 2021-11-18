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
import useMemberHandler from "./hooks/member-handler";
import { Route, Routes, Redirect, Switch } from "react-router-dom";
import Wrapper from "./Components/UI/Wrapper";
import Welcome from "./Components/welcome/Welcome";
import { Fragment } from "react";

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

  const { member: classes, addMember: addClass } = useMemberHandler(classesFF);

  const partyMembers = [];
  const { member, addMember: renderMember } = useMemberHandler(partyMembers);

  return (
    <Fragment>
      <Route path="/">
        <Redirect to="/Login" />
      </Route>
      {!ctx.loggedIn && (
        <Route path="/Login">
          <Login />
        </Route>
      )}

      {ctx.loggedIn && <MainHeader />}
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Switch>
        <Route path="/createclass">
          <UserClasses addInfo={addClass} />
          <RenderClass items={classes} />
        </Route>
        <Route path="/makeparty">
          <UserParty onChangeMember={renderMember} classNames={classes} />
          <RenderMembers items={member} />
        </Route>
        <Route path="/redux">
          <Passcode />
          <Message />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;

{
  /* <div>
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
</div> */
}
