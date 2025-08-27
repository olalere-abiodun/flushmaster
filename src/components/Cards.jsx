import React from "react";

function Cards(props) {
    return (
<div className="card">
  <p>
    {props.text}                
  </p>
  <section>
    <img src={props.images} />
    <h5>{props.author}</h5>
  </section>
</div>

    );
}

export default Cards;
