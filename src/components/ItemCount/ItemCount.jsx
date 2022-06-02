import React, { useState } from "react";
import "./ItemCount.css";
import { Button, Card } from "react-bootstrap";

const ItemCount = (props) => {
    const stock = parseInt(props.stock)
    const [counter, setCounter] = useState(parseInt(props.initial))
    const agregarItem = () =>{if(counter < stock){setCounter(counter + 1)}}
    const quitarItem = () =>{if(counter > parseInt(props.initial)){setCounter(counter - 1)}}
    const onAdd = () =>{console.log(counter)}

  return (      
    <>
      <Card className="text-center counterBox">
        <Card.Header>Nombre Item Carrito</Card.Header>
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <Card.Title className="counterPanel d-flex justify-content-between">
            <span className="counterControler" onClick={quitarItem}>-</span>
            <span >{counter}</span>
            <span className="counterControler" onClick={agregarItem}>+</span>
          </Card.Title>
          <Button variant="outline-secondary" onClick={onAdd}>Agregar al Carrito</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
