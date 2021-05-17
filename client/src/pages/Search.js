import React, { useState, useEffect } from "react";
import { findlists } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function Search() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    findlists(lists)
    .then(({data: listData}) => {
      console.log(listData)
      setlists(listData);
    });
  }, []);

  const handleSearch = (event) => {
    // alert("This is currently under construction right now, but you can expect to have this active soon!")
    event.preventDefault();
    console.log(lists);
    findlists({
      user: lists,
    })
      .then((data) => {
        console.log(data);
        setlists({
          lists: data,
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
      <h1>
        {lists.map((list) => {
          return <h1>{list.listName} </h1>;
        })}
      </h1>
      <h1>Search for a user/their lists here!</h1>
      <div className="card">
        <form>
          <div className="form-group">
            <label htmlFor="userName">User</label>
            <input
              value={lists}
              onChange={(event) => setlists(event.target.value)}
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
        </form>
      </div>
    </div>
  );
}
export default Search;
