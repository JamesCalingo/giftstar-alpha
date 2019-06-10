import React from "react";
import ProdListItem from "./ProdListItem";
import { NavLink } from 'react-router-dom';
import { getMyRegistry } from "../utils/API";
import { toast, ToastContainer } from "react-toastify";


// import the products in the registry from the database somehow

const products = []

class RegistryList extends React.Component {
state = {
  products: []
}

componentDidMount(){
  getMyRegistry(products)
  .then(({data: productData}) =>{
    console.log(productData);
    this.setState({
      products: productData
    })
})
}


claimProduct = () =>{
toast("Thank You!!")
}

render(){
  return (
    <div className="container">
    <ToastContainer />
      <div className="card">
        <div className="card-header">
          <h4>Items</h4>
        </div>
        <div className="card-content myList">
        <div className="lines"></div>
          <ul className="list-unstyled list">
          {this.state.products.map(products => {
            return(
              <ProdListItem key={products.id} name={products.product} link={products.productLink} claimProduct={this.claimProduct}/>
            )
          })}
          </ul>
          <NavLink to="/AddItem" className="btn btn-primary mx-2">Add Items to my list</NavLink>
        </div>
      </div>
    </div>
  )
}
}

export default RegistryList