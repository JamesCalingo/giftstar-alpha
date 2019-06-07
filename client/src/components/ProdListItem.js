import React from "react";

function ProdListItem(props){
  return(
    <li>{props.name}
    <button className="btn btn-success ml-3">Claim this item!</button>
    </li>
  )
}
export default ProdListItem