import React from "react";

function ListItem(props){
  return(
    <li>{props.name}
    <button className="btn btn-success">Claim this item</button>
    </li>
  )
}
export default ListItem