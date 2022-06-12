import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../utils/getFetch";

const ItemDetailContainer = (props) => {
const [productos, setProductos] = useState([]);
const [detalle, setDetalle] = useState([]);

useEffect(() => {
    getFetch()
      .then((resp) => setProductos(resp))
      .then(setDetalle(productos.filter(p=> p.id == parseInt(props.item))))
      .then(setDetalle(detalle[0]))
      .catch((err) => console.log(err));
  }, []);



  console.log(productos, detalle)

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
