import React from "react";
import Line from "./Line";
export default function Lins(props) {
  return (
    <>
      <Line
        handle={props.handle}
        vc={[
          { value: "AC", className: "operator AC" },
          { value: "DEL", className: "operator DEL" },
          { value: "/", className: "operator val" },
          { value: "%", className: "operator val" },
        ]}
      />
      <Line
        handle={props.handle}
        vc={[
          { value: "7", className: "val" },
          { value: "8", className: "val" },
          { value: "9", className: "val" },
          { value: "*", className: "operator val" },
        ]}
      />
      <Line
        handle={props.handle}
        vc={[
          { value: "4", className: "val" },
          { value: "5", className: "val" },
          { value: "6", className: "val" },
          { value: "+", className: "operator val" },
        ]}
      />
      <Line
        handle={props.handle}
        vc={[
          { value: "1", className: "val" },
          { value: "2", className: "val" },
          { value: "3", className: "val" },
          { value: "-", className: "operator val" },
        ]}
      />
      <Line
        handle={props.handle}
        vc={[
          { value: ".", className: "operator val" },
          { value: "0", className: "val" },
          { value: "=", className: "equal" },
        ]}
      />
    </>
  );
}
