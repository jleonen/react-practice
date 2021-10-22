import React from "react";
import ClassInfo from "./ClassInfo";

function RenderClass(props) {
  return (
    <div>
      <ClassInfo
        name={props.class[0].name}
        ability={props.class[0].ability}
        upgrade={props.class[0].upgrade}
      />

      <ClassInfo
        name={props.class[1].name}
        ability={props.class[1].ability}
        upgrade={props.class[1].upgrade}
      />

      <ClassInfo
        name={props.class[2].name}
        ability={props.class[2].ability}
        upgrade={props.class[2].upgrade}
      />

      <ClassInfo
        name={props.class[3].name}
        ability={props.class[3].ability}
        upgrade={props.class[3].upgrade}
      />
    </div>
  );
}

export default RenderClass;
