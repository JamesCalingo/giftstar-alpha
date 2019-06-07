import React from "react";
import ProdListItem from "./ProdListItem";
import { NavLink } from 'react-router-dom';

// import the products in the registry from the database somehow

class RegistryList extends React.Component {
state = {
  product: ""
}

componentDidMount(){
  
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
          {/* {this.state.products.map(products => {
            return(
              <ProdListItem key={products.id} name={products.name}/>
            )
          })} */}
          </ul>
          <NavLink to="/AddItem" className="btn btn-primary mx-2">Add Items to my list</NavLink>
        </div>
      </div>
    </div>
  )
}
}

export default RegistryList