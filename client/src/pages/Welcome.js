import React from "react";

function Welcome() {
  return (
    <div>
      <div className="jumbotron">
        <h1>Gifts in the Gazebo</h1>
        A place for wishlists, registries, and more!</div>
      <div className="container justify-content-center">
        <div className="card text-center" style={{width: "75%"}}>
        <div className="card-body">
        How can we help you today?<br />
        <button className="btn btn-primary mx-2">I'd like to create a new list/registry</button>
        <button className="btn btn-success mx-2">I'd like to find a registry someone created</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
