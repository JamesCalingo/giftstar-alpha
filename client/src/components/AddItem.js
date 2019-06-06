import React from "react";

class AddItem extends React.Component {
  state = {
    item: "",
    link: "",
  }
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
    .then(
      alert("Item Added successfully!")
    )
    .catck(err =>{
      console.log(err);
      alert("An error has happened.")
    })
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header"><h4>Add Item</h4>
          </div>
          <div className="card-content">
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Item</label>
                <input value={this.state.item} name="item" onChange={this.handleInputChange} type="input" class="form-control" id="itemInput" aria-describedby="itemInput" />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Link</label>
                <input value={this.state.link} name="link" onChange={this.handleInputChange} type="input" class="form-control" id="linkInput" placeholder="Optional" />
                <small id="linkHelp" class="form-text text-muted">You can include a link to an external listing for your product!  </small>
              </div>
              <button type="submit" class="btn btn-primary" onClick={this.handleAddItem}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default AddItem