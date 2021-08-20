import React, { useState, useEffect } from "react";
import { findProducts, findUsers } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Search() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    findUsers(users).then(({ data: userData }) => {
      findProducts(products).then(({ data: productData }) => {
        console.log(productData);
        console.log(userData);
        setProducts(productData);
        setUsers(userData);
      });
    });
  }, []);

  const handleSearch = (event) => {
    // alert("This is currently under construction right now, but you can expect to have this active soon!")
    event.preventDefault();
    console.log(users);
    findUsers({
      users: users,
    })
      .then((data) => {
        console.log(data);
        setUsers({
          users: data,
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          title: "Whoops!",
          type: "error",
          text: "We seem to have encountered a problem with your request. Try again.",
        });
      });
  };

  return (
    <div className="container">
      <h1>Search for a user's list here!</h1>
      <p>
      Here, you can see some of our users and the things they would like (as well as links to purchase these items if they were provided by the user.)
      </p>
      <div className="card px-2 py-3">
        {/* <form>
          <div className="form-group">
            <label htmlFor="userName">User</label>
            <input
              value=""
              name="user"
              type="input"
              className="form-control form-control-lg"
              id="registryName"
              aria-describedby="userName"
              placeholder=""
            />
          </div>
        </form> */}
        {users.length === 0 ? (
          <h1>Loading... if this persists let us know.</h1>
        ) : (
          <div>
            {users.map((user) => {
              return (
                <div className="card mb-3">
                  <div className="border-bottom" key={user.id}>
                    <h2>
                      {user.firstName} {user.lastName}
                    </h2>
                    would like
                    {products
                      .filter((product) => product.userId === user.id)
                      .map((product) => {
                        return(
                        <ul>
                          <li key={product.id}>{product.product} {product.productLink ? <a href={product.productLink} target="_blank">buy it here</a> : ""}</li>
                        </ul>
                        )
                      })}
                  </div>
                </div>
              );
            })}
           
          </div>
        )}
      </div>
      <a href="/" className="mb-3 plain-text-link">
        Return home
      </a>
    </div>
  );
}
export default Search;
