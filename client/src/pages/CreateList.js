import React, {useState} from "react";
import {createRegistry} from "../utils/API"

function CreateList() {
  const [registry, setRegistry] = useState("");
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")


const handleSubmit = event =>{
  event.preventDefault();
  createRegistry({registry, type, description})
  .then(({data}) => {
    alert(`succesfully created ${registry} for ${description}. ${type}`)
    console.log(data);
  })
  .catch(err => {
    console.log(err);
    alert(`couldn't create ${registry} for ${type} with ${description}...`)
  })
}


  return(
    <React.Fragment>
    <div>
      <h1 className="text-center page-title">Create a new List/Registry!</h1>
    <div className="container">
    <div className="card">
    <div className="card-body">
    <form>
  <div className="form-group">
    <label htmlFor="listName">Registry Name</label>
    <input type="email" className="form-control form-control-lg" id="registryName" value={registry} onChange={e => setRegistry(e.target.value)}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlSelect1">My Registry is for a:</label>
    <select value={type} onChange={e => setType(e.target.value)} className="form-control" id="exampleFormControlSelect1">
      <option>Please Select One:</option>
      <option>Wedding</option>
      <option>Baby Shower</option>
      <option>Other</option>
    </select>
  </div>
  
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Add a description to help people understand what your list/registry is for" value={description} onChange={e => setDescription(e.target.value)}></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Create my list</button>
</form>
    </div>
    </div>
    </div>
    </div>
    </React.Fragment>
  )
}

export default CreateList