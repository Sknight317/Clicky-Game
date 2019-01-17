import React from "react";
import "./style.css";

function Header(props) {
  return <div className="title">
        <div className="score">
        Score: {props.score} Message: {props.message} Top Score: {props.topscore}

        </div>
        </div>;
}

export default Header;
