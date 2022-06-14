import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../utils/getFetch";

const ItemDetailContainer = (props) => {
const [detalle, setDetalle] = useState([]);

useEffect(() => {
  getFetch(props.item)
    .then((resp) => setDetalle(resp))
    .catch((err) => console.log(err));
}, []);

  console.log(detalle)

  return (
    <>
      <ItemDetail
        key={detalle.id}
        id={detalle.id}
        title={detalle.title}
        description={detalle.description}
        shortDescription={detalle.shortDescription}
        price={detalle.price}
        pictureUrl={detalle.detalleUrl}
      /> 
    </>
  );
};

export default ItemDetailContainer;
