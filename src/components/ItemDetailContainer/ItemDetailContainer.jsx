import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../utils/getFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
const [detalle, setDetalle] = useState([]);
const { id } = useParams()

useEffect(() => {
  getFetch(parseInt(id))
    .then((resp) => setDetalle(resp))
    .catch((err) => console.log(err));
}, []);

  console.log(detalle)

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
