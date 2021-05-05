import React from "react";
import { findUser } from "../utils/API";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

class UserSearch extends React.Component {
  state = {
    user: "",
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleSearch = (event) => {
    // alert("This is currently under construction right now, but you can expect to have this active soon!")
    event.preventDefault();
    console.log(this.state.user);
    findUser({
      user: this.state.user,
    })
      .then((data) => {
        console.log(data);
        this.setState({
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

  render() {
    return (
      <div className="container">
        <h1>Search for a user/list/registry here!</h1>
        <div className="card">
          <form>
            <div className="form-group">
              <label htmlFor="userName">User</label>
              <input
                value={this.state.user}
                onChange={this.handleInputChange}
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
        {/* <div className="card">
        {this.state.user ? this.state.user : ""}</div> */}
      </div>
    );
  }
}
export default UserSearch;
