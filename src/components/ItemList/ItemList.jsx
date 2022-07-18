import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div className="d-flex">
            {items.map((producto) => (
              <Item key={producto.id} item={producto} />
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default ItemList;
