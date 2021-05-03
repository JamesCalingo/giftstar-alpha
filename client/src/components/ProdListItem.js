import React from 'react'

function ProdListItem (props) {
  return (
    <li className='border-bottom'>{props.name} <br />
    
      <button className='btn btn-success mx-3' onClick={props.claimProduct}>Claim this item!</button>
    <a href={props.link ? props.link : ''} className={props.link ? "btn btn-primary" : "" } target="blank">{props.link ? "purchase it here" : ""}</a> 
    </li>
  )
}
export default ProdListItem
