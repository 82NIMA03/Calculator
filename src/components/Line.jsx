import React from "react";
import Key from "./Key";
export default function Line(props) {
  const keys = props.vc.map((key) => (
    <Key value={key.value} className={key.className} handle={props.handle} />
  ));
  return <div>{keys}</div>;
}
