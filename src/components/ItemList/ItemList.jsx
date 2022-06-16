import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";


const ItemList = ({items}) => {
  return (
    <>
      <div className="d-flex">
        {items.map((producto) => (
          <Item
            key={producto.id}
            item = {producto}
          />
        ))}
      </div>
    </>
  );
};

export default ItemList;
