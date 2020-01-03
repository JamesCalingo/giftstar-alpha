import React from "react";
import { NavLink } from 'react-router-dom';

function Success (){
  return(
    <div className="text-center">
      <div className="jumbotron display-3">Account created successfully!</div>

      <h2>Your account was successfully created!</h2>

      <p>Now, let's get your first gift registry started!</p>

      <NavLink to="/CreateList" className="btn btn-success btn-lg mb-3">Create Registry</NavLink> <br />
      <NavLink to="/Account" className="btn btn-primary">View My Account Page</NavLink>
    </div>
  )
}

export default Success