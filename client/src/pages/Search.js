import React, { useState, useEffect } from "react";
import { findProducts, findUsers } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Search() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    findUsers(users).then(({ data: userData }) => {
      findProducts(products).then(({ data: productData }) => {
        console.log(productData);
        console.log(userData);
        setProducts(productData);
        setUsers(userData);
        console.log(search);
      });
    });
  }, []);

  function searchForUsers(text, users) {
    return users.filter((name) => {
      const regex = new RegExp(text, "gi");
      return name.match(regex);
    });
  }

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   console.log(users);
  //   findUsers({
  //     users: users,
  //   })
  //     .then((data) => {
  //       console.log(data);
  //       setUsers({
  //         users: data,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       MySwal.fire({
  //         title: "Whoops!",
  //         type: "error",
  //         text: "We seem to have encountered a problem with your request. Try again.",
  //       });
  //     });
  // };

  return (
    <div className="container mt-5">
      <h1>Search for a user/their list here!</h1>

      <div className="card px-2 py-3">
        <form>
          <div className="form-group">
            <label htmlFor="userName">User</label>
            <input
              name="user"
              type="input"
              className="form-control form-control-lg"
              id="userName"
              aria-describedby="userName"
              placeholder=""
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(search);
              }}
            />
          </div>
        </form>
        {search === "" ? (
          <p>Type the name of the person you're looking for in the search bar and they should show up.</p>
        ) : (
          <div>
            {users
              .filter((user) => {
                let fullName = `${user.firstName.toLowerCase()} ${user.lastName.toLowerCase()}`;
                let searchLC = search.toLowerCase();
                return (
                  user.firstName.toLowerCase().includes(searchLC) ||
                  user.lastName.toLowerCase().includes(searchLC) ||
                  fullName.includes(searchLC)
                );
              })
              .map((user) => {
                return (
                  <div key={user.id} className="card mb-3">
                    <div className="border-bottom" key={user.id}>
                      <h2>
                        {user.firstName} {user.lastName}
                      </h2>
                      would like
                      {products
                        .filter((product) => product.userId === user.id)
                        .reverse()
                        .map((product) => {
                          return (
                            <ul key={product.id}>
                              <li key={product.id}>
                                {product.product} |{" "}
                                {product.productLink ? (
                                  <a
                                    href={product.productLink}
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    Buy it Here
                                  </a>
                                ) : (
                                  ""
                                )}
                              </li>
                            </ul>
                          );
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
