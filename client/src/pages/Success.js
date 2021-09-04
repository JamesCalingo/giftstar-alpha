import React from "react";
import { NavLink } from "react-router-dom";

function Success() {
  return (
    <div className="text-center mt-5">
      <div className="jumbotron display-3">Account created successfully!</div>
      <h2>Your account was successfully created!</h2>
      <p>Now, let's start by adding some items to your wishlist!</p>
      <NavLink to="/mylist" className="btn btn-success btn-lg mb-3">
        Let's go!
      </NavLink>{" "}
      <br />
      {/* <NavLink to='/Account' className='btn btn-primary'>View My Account Page</NavLink> */}
    </div>
  );
}

export default Success;
