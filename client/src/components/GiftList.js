import React, { useState, useEffect } from "react";
import ProdListItem from "./ProdListItem";
import { getMyData, getSpecificList } from "../utils/API";
import { toast, ToastContainer } from "react-toastify";

function GiftList() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyData(user).then(({ data: userData }) => {
      getMyList(list).then(({ data: productData }) => {
        setUser(userData);
        setProducts(productData);
        setLoading(false);
      });
    });
  }, [products]);

  const claimProduct = () => {
    toast("Thank You!!");
  };

  return (
    <div className="container">
      <ToastContainer />
      {loading ? (
        <h1 className="text-center">Loading</h1>
      ) : (
        <div>
          <h1 className="text-center">
            {user.firstName} {user.lastName}'s list
          </h1>
          <div className="card">
            <div className="card-header">
              <h4>Items</h4>
            </div>
            <div className="card-content myList">
              <div className="lines"></div>
              <ul className="list-unstyled list">
                {products.map((product) => {
                  return (
                    <ProdListItem
                      key={product.id}
                      name={product.product}
                      link={product.productLink}
                      // claimProduct={claimProduct()}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GiftList;

