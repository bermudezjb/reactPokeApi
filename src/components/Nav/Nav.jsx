import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul>
        <li className="liNav">
          <Link to="/">Inicio</Link>
        </li>
        <li className="liNav">
          <Link to="/Pokecardlist">Listado Pokemon</Link>
        </li>
        <li className="liNav">
          <Link to="/Pokebounce">Pokebounce</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
