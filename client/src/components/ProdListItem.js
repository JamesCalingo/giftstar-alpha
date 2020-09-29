import React from 'react'

function ProdListItem (props) {
  return (
    <li className='border-bottom'>{props.name}  | <a href={props.link ? props.link : ''}>Buy it here</a> <br />
      <button className='btn btn-success ml-3' onClick={props.claimProduct}>Claim this item!</button>
    </li>
  )
}
export default ProdListItem
