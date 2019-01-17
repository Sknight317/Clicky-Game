import React from "react";
import "./style.css";

const Navbar = props => (
    <nav className="navbar-style">
      <ul>
        <p>Animal Clicky Game</p>
  
        <li id="message">{props.message}</li>
  
        <li id="score">Score: {props.score}</li> |
  
        <li id="top-score">Top Score: {props.topScore}</li>
      </ul>
    </nav>
  );
export default Navbar;