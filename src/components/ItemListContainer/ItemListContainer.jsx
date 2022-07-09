import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
//import getFetch from "../../utils/getFetch";
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const [productos, setProductos] = useState([]);
  const { categoriaId } = useParams()

//-------- fetch original de articulos con getFetch
//   useEffect(() => {
//     if(categoriaId){
//     getFetch()
//     .then((resp) => setProductos(resp.filter(prod => prod.category === categoriaId)))
//     .catch((err) => console.log(err));
//     }else{
//     getFetch()
//       .then((resp) => setProductos(resp))
//       .catch((err) => console.log(err));
// }}, [categoriaId]);

// utilizando firebase, useEffect para traer todos los documentos 
useEffect(()=>{
  const db = getFirestore()
  if(categoriaId){
    const queryColletionByCategory = query(collection(db, 'items'), where('category','==', categoriaId))
    getDocs(queryColletionByCategory)
    .then(data =>setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))))
  }else{
    const queryCollection = collection(db, 'items')
    getDocs(queryCollection)
    .then(data =>setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))))
  }

},[categoriaId])

console.log(productos)
  return (
    <div>
        <h2>{props.greeting}</h2>
        <ItemList items={productos}/>

    </div>
  )
}

export default ItemListContainer