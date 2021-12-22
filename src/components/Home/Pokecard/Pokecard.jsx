import React from "react";
import "./Pokecard.css";

const Pokecard = (props) => {
  return (
    <div className="Card">
      <p>{props.pokecardata.name}</p>
      <img src={props.pokecardata.img} alt="" />
    </div>
  );
};

export default Pokecard;
