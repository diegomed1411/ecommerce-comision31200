import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../utils/getFetch";

const ItemDetailContainer = (item) => {
  const [productosTotales, setProductosTotales] = useState([]);
  const [detalle, setDetalle] = useState([]);

useEffect(() => {
    getFetch()
      .then((resp) => setDetalle(resp.filter(p=> p.id == item)))
      //.then(setDetalle(productosTotales.filter(p => p.id === item)))
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
