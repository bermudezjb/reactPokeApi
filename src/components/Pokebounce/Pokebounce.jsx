import React, { useEffect, useState } from "react";
import axios from "axios";
import Pokebouncelist from "./Pokebouncelist";
import { useDebounce } from "use-debounce";

function Pokebounce() {
  const [pokemons, setPokemons] = useState([]);
  // para poder recoger lo que entra por el formulario. Va almacenar el name de pokemon
  const [pokemonSearch, setpokemonSearch] = useState("");

  const [debouncedText] = useDebounce(pokemonSearch, 1000);

  const drawcard = () => {
    return pokemons.map((datapokemons, i) => (
      <Pokebouncelist pokecardata={datapokemons} key={i} />
    ));
  };
  //axios para traer info de la api Pokemon

  useEffect(() => {
    const mypokemons = async () => {
      const resp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${debouncedText}`
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
    mypokemons();
  }, [debouncedText]);

  //funcion para setear el nombre que entre del pkemon por formulario

  // se pinta la carta, cogiendo el estado pokemon y se mapea. Se pasan dos parametros que es mi estado (i = a mi posicion)
  return (
    <div className="Card">
      <form>
        <input
          type="text"
          name="getInfo"
          onChange={(e) => setpokemonSearch(e.target.value)}
        />
      </form>
      {drawcard()}
    </div>
  );
}

export default Pokebounce;
