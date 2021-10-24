import "./App.css";
import RenderClass from "./RenderClasses";
import ClassForm from "./ClassForm";
import { useState } from "react";
import UserClasses from "./UserClasses";

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

  const [classes, setClasses] = useState(classesFF);
  const addClass = (classFF) => {
    console.log(classFF);
    setClasses((prevClass) => {
      return [classFF, ...prevClass];
    });
  };

  return (
    <div>
      <UserClasses addInfo={addClass} />
      <RenderClass items={classes} />;
    </div>
  );
}

export default App;
