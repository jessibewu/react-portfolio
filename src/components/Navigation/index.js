import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation(props) {   

    return (
    <div className="row navigation" id="navigation">
      <h5>
        <NavLink to="/about">About </NavLink>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/resume">Resume</NavLink>
        <NavLink to="/contact">Contact </NavLink>
      </h5>
    </div>
  );
}

export default Navigation;