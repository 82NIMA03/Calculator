import React from "react";
import Output from "./Output";
import Lins from "./Lines";
export default function Calclator(props) {
  return (
    <div className="calclator">
      <Output value={props.output} />
      <Lins handle={props.handle} />
    </div>
  );
}
