import React from "react";

class RegistrySearch extends React.Component {
  state = {
    registry: ""
  }

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleSearch = event =>{
    event.preventDefault();
    alert(this.state.registry)
    this.setState({
      registry: ""
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Search for a list/registry here!</h1>
        <div className="card">
          <form>
            <div class="form-group">
              <label for="registryName">List/Registry name</label>
              <input value={this.state.registry} name="registry" onChange={this.handleInputChange} type="input" class="form-control form-control-lg" id="registryName" aria-describedby="RegistryName" placeholder="" />

            </div>

            <button type="submit" class="btn btn-primary" onClick={this.handleSearch}>Submit</button>
          </form>

        </div>
      </div>
    )
  }
}
export default RegistrySearch