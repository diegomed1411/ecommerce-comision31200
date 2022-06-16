import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import getFetch from "../../utils/getFetch";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, []);


  return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemList items={productos}/>

    </div>
  )
}

export default ItemListContainer