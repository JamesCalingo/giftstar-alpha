import React from "react";

function Unpurchased() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Items still to be purchased </h4>
        </div>
        <div className="card-content">
          <ul className="list-unstyled">
            <li>Things</li>
            <li>To</li>
            <li>Buy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Unpurchased