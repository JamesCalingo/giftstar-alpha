import React from "react";

function CreateList() {
  return(
    <React.Fragment>
    <div>
      <h1 className="text-center">Create a new List/Registry!</h1>
    <div className="container">
    <div className="card">
    <div className="card-body">
    <form>
  <div className="form-group">
    <label htmlFor="listName">List/Registry Name</label>
    <input type="email" className="form-control form-control-lg" id="listName" placeholder="" />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">My list/Registry is for a:</label>
    <select className="form-control" id="exampleFormControlSelect1">
      <option>Wish List</option>
      <option>Wedding</option>
      <option>Baby Shower</option>
      <option>Other</option>
    </select>
  </div>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a description to help people understand what your list/registry is for"></textarea>
  </div>
  <button type="submit" className="btn btn-primary">Create my list</button>
</form>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default CreateList