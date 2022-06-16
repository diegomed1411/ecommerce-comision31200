import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import getFetch from "../../utils/getFetch";
import { useParams } from 'react-router-dom';

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams()

  useEffect(() => {
    if(categoriaId){
    getFetch()
    .then((resp) => setProductos(resp.filter(prod => prod.category === categoriaId)))
    .catch((err) => console.log(err));
    }else{
    getFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
}}, [categoriaId]);


  return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemList items={productos}/>

    </div>
  )
}

export default ItemListContainer