import React from "react";

  const Pokebouncelist = (props) => {
    return <div>
      <p>{props.pokecardata.name}</p>
      <img src={props.pokecardata.img} alt="pokemon" />
    </div>;
  };
  

export default Pokebouncelist;
