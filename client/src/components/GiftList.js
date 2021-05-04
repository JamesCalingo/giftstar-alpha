import React from "react";
import ProdListItem from "./ProdListItem";
import { getMyData, getMyRegistry } from "../utils/API";
import { toast, ToastContainer } from "react-toastify";

const products = [];
const users = "";

class GiftList extends React.Component {
  state = {
    user: "",
    products: [],
  };

  componentDidMount() {
    getMyData(users).then(({ data: userData }) => {
      getMyRegistry(products).then(({ data: productData }) => {
        console.log(productData);
        this.setState({
          products: productData,
          user: userData,
        });
      });
    });
  }

  claimProduct = () => {
    toast("Thank You!!");
  };

  render() {
    return (
      <div className="container">
        <ToastContainer />
        <h1 className="text-center">
          {this.state.user
            ? this.state.user.firstName
            : "No account is logged in right now."}{" "}
          {this.state.user ? this.state.user.lastName + "'s Wishlist" : ""}
        </h1>
        <div className="card">
          <div className="card-header">
            <h4>Items</h4>
          </div>
          <div className="card-content myList">
            <div className="lines"></div>
            <ul className="list-unstyled list">
              {this.state.products.map((products) => {
                return (
                  <ProdListItem
                    key={products.id}
                    name={products.product}
                    link={products.productLink}
                    claimProduct={this.claimProduct}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GiftList;
