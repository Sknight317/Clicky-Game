import React from "react";
import "./style.css";

function Navbar(props) {
  return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
        <li class="nav-item active">
            <p>Click an Image to Begin<span class="score"></span></p>
          </li>
      <li class="nav-item active">
        <p>Score:<span class="score">{props.score}</span></p>
      </li>
      <li class="nav-item active">
        <p>Top Score:<span class="top-score">{props.topscore}</span></p>
      </li>
    </ul>
  </div>
</nav> 
}

export default Navbar;