import React, { useState, useEffect } from "react";
import { findProducts, findUsers } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Search() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([])

  useEffect(() => {
    findUsers(users).then(({ data: userData }) => {
      findProducts(products).then(({ data: productData}) => {
        console.log(productData)
      console.log(userData);
      setProducts(productData)
      setUsers(userData);
    })
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
        This is currently under construction, but you can see what type of
        things this will be used for!
      </p>
      <div className="card px-2 my-3">
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

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form> */}
        {users.length === 0 ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            {users.map((user) => {
              return (
                <div className="border-bottom" key={user.id}>
                  <h1>{user.firstName} {user.lastName}</h1>
                  <h1>{user.id}</h1>
                  {/* <h3>by {list.userId}</h3>
                  <h4>{list.description}</h4> */}
                </div>
              );
            })}
            {products.map((product) => {
              return (
                <p key={product.id}>{product.product} {product.userId}</p>
              )
            })}
          </div>
        )}
      </div>
      <a href="/" className="mb-3 plain-text-link">Return home</a>
    </div>
  );
}
export default Search;
