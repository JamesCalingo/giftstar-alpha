import React from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { addItem } from "../utils/API"
  import { NavLink } from 'react-router-dom';

class AddItem extends React.Component {
  state = {
    item: "",
    link: "",
  }
  success = () => {toast.success("Item successfully added!", {
    position: toast.POSITION.BOTTOM_CENTER
  })
};
  failure = () => {toast.error("An error occurred.", {
    position: toast.POSITION.BOTTOM_CENTER
  })}

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;
  
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleAddItem = event =>{
    event.preventDefault();
    addItem({
      product: this.state.item,
      productLink: this.state.link
    })
    .then(({data: productData})=>{
      console.log(productData)
      this.success()
    })
    .catch(err =>{
      console.log(err);
      this.failure()
    })
  }

  render() {
    return (
      <div className="container">
      <ToastContainer />
        <div className="card">
          <div className="card-header"><h4>Add Item</h4>
          </div>
          <div className="card-content">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Item</label>
                <input value={this.state.item} name="item" onChange={this.handleInputChange} type="input" className="form-control" id="itemInput" aria-describedby="itemInput" />
                <small id="productHelp" className="form-text text-muted">To help your guests out, try to be as specific as possible </small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Link</label>
                <input value={this.state.link} name="link" onChange={this.handleInputChange} type="input" className="form-control" id="linkInput" placeholder="Optional" />
                <small id="linkHelp" className="form-text text-muted">You can include a link to an external listing for your product! This will help your guests find the perfect gifts for you! </small>
              </div>
              <button type="submit" className="btn btn-success" onClick={this.handleAddItem}>Submit</button>
            </form>
            <NavLink to="/RegistryList" className="btn btn-primary mx-2 my-3">Go back to my Registry</NavLink>

          </div>
        </div>
      </div>
    )
  }
}

export default AddItem