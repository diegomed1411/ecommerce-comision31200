import React from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (props) => {
  return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemList />

    </div>
  )
}

export default ItemListContainer