import React from "react";

class Purchased extends React.Component {
state = {
  product: product
}
render(){
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h4>Items</h4>
        </div>
        <div className="card-content">
          <ul className="list-unstyled">
          <li>Purchased</li>
          <li>Things</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
}

export default Purchased