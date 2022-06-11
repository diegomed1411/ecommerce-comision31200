import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getFetch from "../../utils/getFetch";

const ItemDetailContainer = (item) => {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    return new Promise(resolve)
      .then((resp) => setProducto(resp))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <ItemDetail
        key={producto.id}
        id={producto.id}
        title={producto.title}
        description={producto.description}
        shortDescription={producto.shortDescription}
        price={producto.price}
        pictureUrl={producto.productoUrl}
      /> 
    </>
  );
};

export default ItemDetailContainer;
