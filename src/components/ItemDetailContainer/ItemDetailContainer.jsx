import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
//import getFetch from "../../utils/getFetch";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
const [detalle, setDetalle] = useState([]);
const { id } = useParams()

useEffect(() =>{
  const db = getFirestore()
  const queryItem = doc(db, 'items', id )
  getDoc(queryItem)
  .then(resp => setDetalle({id: resp.id, ...resp.data()}))
  .catch(err => console.log(err))
},[])


//fetch original utilizando getFetch
// useEffect(() => {
//   getFetch(parseInt(id))
//     .then((resp) => setDetalle(resp))
//     .catch((err) => console.log(err));
// }, []);

  return (
    <>
      <ItemDetail
        key={detalle.id}
        item = {detalle}
      /> 
    </>
  );
};

export default ItemDetailContainer;
