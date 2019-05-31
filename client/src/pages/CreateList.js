import React from "react";

function CreateList() {
  return(
    <div>
      <h1 className="text-center">Create a new List/Registry!</h1>
    <div className="container">
    <div className="card">
    <div className="card-body">
    <form>
  <div class="form-group">
    <label for="listName">List/Registry Name</label>
    <input type="email" class="form-control form-control-lg" id="listName" placeholder="" />
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">My list/Registry is for a:</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>Wish List</option>
      <option>Wedding</option>
      <option>Baby Shower</option>
      <option>Other</option>
    </select>
  </div>
  
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a description to help people understand what your list/registry is for"></textarea>
  </div>
  <button type="submit" class="btn btn-primary">Create my list</button>
</form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default CreateList