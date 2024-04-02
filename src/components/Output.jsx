import React from "react";

export default function Output(props) {
  return (
    <>
      <div className="output">
        <input
          type="text"
          className="text"
          placeholder="0"
          value={props.value}
        />
      </div>
    </>
  );
}
