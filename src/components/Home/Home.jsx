import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import Pokecard from "./Pokecard";

function Home() {
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
      setPokemons({
        name: resp.data.name,
        img: resp.data.sprites.front_default,
      });
    };
    mypokemons();
  }, [pokemonSearch]);

  //funcion para setear el nombre que entre del pkemon por formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setpokemonSearch(e.target.getInfo.value);
    e.target.getInfo.value = ""; //para vaciar y dejar sin pokemon
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form_home">
        <input type="text" name="getInfo" />
        <input type="submit" />
      </form>
      <Pokecard pokecardata={pokemons} />
    </div>
  );
}

export default Home;
