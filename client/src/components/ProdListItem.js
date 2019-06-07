import React from "react";

function ProdListItem(props){
  return(
<li>{props.name}  | <a href={props.link}>Buy it here</a>
    <button className="btn btn-success ml-3">Claim this item!</button>
    </li>
  )
}
export default ProdListItem