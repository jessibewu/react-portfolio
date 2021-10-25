import React from 'react';
import {NavLink} from "react-router-dom";

function Navigation() {   
 
    return (
    <div className="navigation" id="navigation">
      <h5>
        <NavLink activeStyle={{ color: '#5b942d' }} to="/about">About</NavLink>
        <NavLink activeStyle={{ color: '#5b942d' }} to="/portfolio">Portfolio</NavLink>
        <NavLink activeStyle={{ color: '#5b942d' }} to="/resume">Resume</NavLink>
        <NavLink activeStyle={{ color: '#5b942d' }} to="/contact">Contact </NavLink>
      </h5>
    </div>
  );
}

export default Navigation;