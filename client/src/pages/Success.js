import React from "react";

function Success (){
  return(
    <div className="text-center">
      <div className="jumbotron display-3">Account created successfully!</div>

      <h2>Your account was successfully created!</h2>

      <p>Now, let's get your first gift registry started!</p>

      <button className="btn btn-success btn-lg">Create Registry</button> <br />
      <button className="btn btn-primary">View My Account Page</button>
    </div>
  )
}

export default Success