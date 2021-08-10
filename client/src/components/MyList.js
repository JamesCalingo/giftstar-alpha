import React, { useState, useEffect } from "react";
import MyListItem from "./MyListItem";
import { getMyData, getProducts } from "../utils/API";
import { toast, ToastContainer } from "react-toastify";

function MyList() {
  const [user, setUser] = useState({});
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyData(user).then(({ data: userData }) => {
      getProducts(list).then(({ data: productData }) => {
        setUser(userData);
        setList(productData);
        setLoading(false);
      }).catch(err => {
        console.log(err)
      });
    }).catch(err => {
      console.log(err)
    });
  }, []);

  return (
    <div className="container">
      <ToastContainer />
      {loading ? (
        <h1 className="text-center">Loading</h1>
      ) : (
        <div>
          <h1 className="text-center">
           {user.firstName} {user.lastName}'s List
          </h1>
          <div className="card">
            <div className="card-header">
              <h4>Items</h4>
            </div>
            <div className="card-content myList">
              <div className="lines"></div>
              <ul className="list-unstyled list">
                {list.map((product) => {
                  return (
                    <MyListItem
                      key={product.id}
                      name={product.product}
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

export default MyList;

