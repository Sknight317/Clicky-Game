import React from "react";
import "./style.css";

function Header(props) {
  return <div className="title">
        <div className="score">
       {props.children}

        </div>
        </div>;
}

export default Header;
