import React from "react";
import { NavLink } from 'react-router-dom';

function Welcome() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Gifts in the Gazebo</h1>
        A place for wishlists, registries, and more!</div>
      <div className="container">
       <div className="row justify-content-center">
        <div className="col-12 col-md-9">
        <div className="card text-center">
          <div className="card-body">
            <h2>How can we help you today?</h2>
            <NavLink to="/CreateList" className="btn btn-primary">Create Registry</NavLink>
            <NavLink to="/RegistrySearch" className="btn btn-success">Find/View Registry</NavLink>
          </div>
        </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Welcome