import React from "react";

function PubListItem(props) {
  return (
    <li className="border-bottom">
      {props.name} <br />
      <button className="btn btn-success mx-1" onClick={props.claimProduct}>
        Claim this item!
      </button>
      <a
        href={props.link ? props.link : ""}
        className={props.link ? "btn btn-primary mx-1" : ""}
        target="blank"
      >
        {props.link ? "purchase it here" : ""}
      </a>
      <br />
      {/* <button onClick={props.deleteItem} className="btn btn-danger mx-1">Delete from list</button> */}
    </li>
  );
}
export default PubListItem;
