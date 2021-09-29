import React from "react";
import lightning from "./../../assets/lightning.png";
import './Nav.css'

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="lightning-logo" src={lightning} alt="Not Found" />
        <p className="lightning-logo-text">Fair_speed Type</p>
      </div>
    </div>
  );
};


export default Nav;
