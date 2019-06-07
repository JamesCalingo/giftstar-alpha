import React from "react";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { addItem } from "../utils/API"

class AddItem extends React.Component {
  state = {
    item: "",
    link: "",
  }
  notify = () => {toast("Item added!");}

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
      
    })
    .catch(err =>{
      console.log(err);
      alert("An error has happened.")
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
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Link</label>
                <input value={this.state.link} name="link" onChange={this.handleInputChange} type="input" className="form-control" id="linkInput" placeholder="Optional" />
                <small id="linkHelp" className="form-text text-muted">You can include a link to an external listing for your product!  </small>
              </div>
              <button type="submit" className="btn btn-success" onClick={this.handleAddItem}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddItem