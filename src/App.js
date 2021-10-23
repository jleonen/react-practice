import "./App.css";
import RenderClass from "./RenderClasses";
import ClassForm from "./ClassForm";

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

  const showUserInfo = (info) => {
    console.log(info);
  };

  return (
    <div>
      <RenderClass class={classesFF} />;
      <ClassForm onInfoChange={showUserInfo} />
    </div>
  );
}

export default App;
