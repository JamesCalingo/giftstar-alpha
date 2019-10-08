import React from "react";
import { findARegistry } from "../utils/API";

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
    alert("This is currently under construction right now, but you can expect to have this active soon!")
    // event.preventDefault();
    // findARegistry({
    //   registry: this.state.registry
    // })
    // .then(data=>{
    //   console.log(data);
    //   this.setState({
    //     registry: data
    //   })
    // })
    //   .catch(err=>{
    //     console.log(err)
    //   })
    
  
  }

  render() {
    return (
      <div className="container">
        <h1>Search for a list/registry here!</h1>
        <div className="card">
          <form>
            <div className="form-group">
              <label htmlFor="registryName">Registry name</label>
              <input value={this.state.registry} name="registry" onChange={this.handleInputChange} type="input" className="form-control form-control-lg" id="registryName" aria-describedby="RegistryName" placeholder="" />

            </div>

            <button type="submit" className="btn btn-primary" onClick={this.handleSearch}>Submit</button>
          </form>
        
        </div>
        <div className="card">
        {this.state.registry ? this.state.registry : ""}</div>
      </div>
    )
  }
}
export default RegistrySearch