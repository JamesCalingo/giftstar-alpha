import React from "react";
import { findUser } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function UserSearch() {
 const [user, setUser] = useState({})

  const handleSearch = (event) => {
    // alert("This is currently under construction right now, but you can expect to have this active soon!")
    event.preventDefault();
    console.log(user);
    findUser({
      user: user,
    })
      .then((data) => {
        console.log(data);
        setUser({
          user: data,
        });
      })
      .catch((err) => {
        console.log(err);
        MySwal.fire({
          title: "Whoops!",
          type: "error",
          text:
            "We seem to have encountered a problem with your request. Try again.",
        });
      });
  };


    return (
      <div className="container">
        <h1>Search for a user/their lists here!</h1>
        <div className="card">
          <form>
            <div className="form-group">
              <label htmlFor="userName">User</label>
              <input
                value={user}
                onChange={event => setUser(event.target.value)}
                name="user"
                type="input"
                className="form-control form-control-lg"
                id="registryName"
                aria-describedby="userName"
                placeholder=""
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.handleSearch}
            >
              Submit
            </button>
          </form>
        </div>
      </div> 
    );
  
}
export default UserSearch;
