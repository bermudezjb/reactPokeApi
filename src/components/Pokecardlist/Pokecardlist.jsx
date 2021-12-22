import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokecard2 from "./Pokecard2";
import "./Pokecardlist.css";

const Pokecardlist = () => {
  const [pokemons, setPokemons] = useState([]);
  // para poder recoger lo que entra por el formulario. Va almacenar el name de pokemon
  const [pokemonSearch, setpokemonSearch] = useState("");

  //axios para traer info de la api Pokemon
  useEffect(() => {
    const mypokemons = async () => {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonSearch}`
      );
      //para guardar la imagen y la mete en pokemons.Lo que me traigo del json de la api
      setPokemons([
        ...pokemons,
        {
          name: resp.data.name,
          img: resp.data.sprites.front_default,
        },
      ]);
    };
    mypokemons([]);
  }, [pokemonSearch]);

  //funcion para setear el nombre que entre del pkemon por formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setpokemonSearch(e.target.getInfo.value);
    e.target.getInfo.value = ""; //para vaciar y dejar sin pokemon
  };

  const drawPokemon = () => {
    return pokemons.map((card, i) => <Pokecard2 pokemons={card} key={i} />);
  };

  return (
    <div className="Card">
      <h4 className="title">Bienvenido a Pokecardlist</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" name="getInfo" />
        <input type="submit" />
      </form>
      {drawPokemon()}
    </div>
  );
};

export default Pokecardlist;
