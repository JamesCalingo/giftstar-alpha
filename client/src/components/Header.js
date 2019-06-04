import React from "react";

function Header () {
  return(
    <div className="container">
    <h1>SAMPLE REGISTRY TITLE</h1>

    <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link active" href="#">Not purchased Items</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Purchased Items</a>
    </li>
    </ul>
 <button className="btn btn-primary">Add Item</button>
    </div>
  )
}

export default Header