import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div id="container">
      <div id="nav-list">
        <div>
          <button id="imdb-logo">IMDb</button>
        </div>
        <div>
          <h4>Menu</h4>
        </div>
        <div id="searchbox">
          <h4>All</h4>
          <input type="text" placeholder="Search IMDb" />
          <h4>icon</h4>
        </div>
        <div>
          <button className="button-style">
            <span>IMBD</span>
            <span id="imdb-color">Pro</span>
          </button>
        </div>
        <div>
          <button className="button-style">Watchlist</button>
        </div>
        <div>
          <button className="button-style">signIn</button>
        </div>
        <div>
          <h4>EN</h4>
        </div>
      </div>
    </div>
  );
}
