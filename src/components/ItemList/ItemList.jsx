import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import getFetch from "../../utils/getFetch";



const ItemList = (items) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getFetch()
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err));
  }, []);

  console.log(productos);

  return (
    <>
      <div className="d-flex">
        {productos.map((producto) => (
          <Item
            key={producto.id}
            id={producto.id}
            title={producto.title}
            description={producto.description}
            price={producto.price}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
