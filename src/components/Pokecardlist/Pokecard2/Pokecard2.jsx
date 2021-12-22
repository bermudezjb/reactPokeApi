import React from "react";
import "./Pokecard2.css";

const Pokecard2 = (props) => {
  return (
    <div className="Card">
      <p>{props.pokemons.name}</p>
      <img src={props.pokemons.img} alt="pokemon" />
    </div>
  );
};

export default Pokecard2;
