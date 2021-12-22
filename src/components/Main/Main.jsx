import React from "react";
import Home from "../Home";
import Pokecardlist from "../Pokecardlist";
import Pokebounce from "../Pokebounce";
import { Route, Routes } from "react-router-dom"; //Para uso de todas las rutas

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokecardlist" element={<Pokecardlist />} />
        <Route path="/Pokebounce" element={<Pokebounce />} />
      </Routes>
    </main>
  );
};

export default Main;
