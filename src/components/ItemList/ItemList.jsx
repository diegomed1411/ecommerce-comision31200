import React, { useEffect, useState } from "react";
import "./ItemList.css";
import Item from "../Item/Item";

const items = [
  {
    id: 1,
    title: "Articulo 1",
    description: "descripcion articulo 1",
    price: 100,
    pictureUrl: "url1",
  },
  {
    id: 2,
    title: "Articulo 2",
    description: "descripcion articulo 2",
    price: 200,
    pictureUrl: "url2",
  },
  {
    id: 3,
    title: "Articulo 3",
    description: "descripcion articulo 3",
    price: 300,
    pictureUrl: "url3",
  },
  {
    id: 4,
    title: "Articulo 4",
    description: "descripcion articulo 4",
    price: 400,
    pictureUrl: "url4",
  },
  {
    id: 5,
    title: "Articulo 5",
    description: "descripcion articulo 5",
    price: 500,
    pictureUrl: "url5",
  },
];

const getFetch = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(items);
    }, 5000);
  });
};

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
