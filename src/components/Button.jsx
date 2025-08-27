import React from "react";

function Button(props) {
  return (
    <button style={{ backgroundColor: props.color }} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default Button;
