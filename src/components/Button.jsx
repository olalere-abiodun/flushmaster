import React from "react";

function Button(props) {
  return (
    <button style={{ backgroundColor: props.color }}>
      {props.label}
    </button>
  );
};

export default Button;
