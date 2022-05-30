import React from "react";
import "./ListItems.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props) {
  const items = props.items
  const listItems = items.map( item =>
    {
      return <div className='list' key={item.key}>
        <p>{item.text} - {`${item.completed}`}
        <span>
        <FontAwesomeIcon className='faicons-check' icon= 'square-check'
onClick={()=> props.completeItem()}/>

  <FontAwesomeIcon className='faicons-trash' icon= 'trash'
  onClick={()=> props.deleteItem(item.key)}
  />

</span>
</p>

      </div>
    })
 return (
   <div>{listItems}</div>
 )
}
export default ListItems;
