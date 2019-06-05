import React, {useState} from "react";
import { NavLink } from 'react-router-dom';

function Navbar () {
  const [login, setLogin] = useState(false)
  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/" className="btn logo">Gifts in the Gazebo</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse">
    <ul className="navbar-nav justify-content-end">
     
      <li className="nav-item">
      <NavLink to="/SignUp" className="btn">Sign up</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/Login" className="btn">Login</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  )
}
export default Navbar