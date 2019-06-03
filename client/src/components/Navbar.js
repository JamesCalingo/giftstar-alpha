import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar () {
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/" className="btn">Gifts in the Gazebo!</NavLink>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav justify-content-end">
     
      <li class="nav-item">
      <NavLink to="/SignUp" className="btn">Sign up</NavLink>
      </li>
      <li class="nav-item">
      <NavLink to="/Login" className="btn">Login</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  )
}
export default Navbar