import React from "react";

function MyListItem(props) {
  return (
    <li className="border-bottom">
      {props.name} <br />
      <br />
      <button onClick={props.deleteItem} className="btn btn-danger mx-1">Delete from list</button>
    </li>
  );
}
export default MyListItem;
