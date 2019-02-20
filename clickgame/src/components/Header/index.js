import React from "react";
import "./style.css";

function Header(props) {
  return <div className="title">
        <div className="score">
        <div className="name">
       <h1 className="name">Animal Clickly Game!</h1>
       <h3 className="name">Click on an image to earn points! Just don't click on an image more than once!</h3>
</div>
        </div>
        </div>;
}

export default Header;
