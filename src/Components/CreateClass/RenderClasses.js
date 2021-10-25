import React from "react";
import ClassInfo from "./ClassInfo";
import "../UI/RenderInfo.css";

function RenderClass(props) {
  return (
    <div className="container-grid">
      {props.items.map((classes) => (
        <ClassInfo
          key={classes.id}
          name={classes.name}
          ability={classes.ability}
          upgrade={classes.upgrade}
        />
      ))}
    </div>
  );
}

export default RenderClass;
