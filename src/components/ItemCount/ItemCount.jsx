import React, { useState } from "react";
import "./ItemCount.css";
import { Button, Card } from "react-bootstrap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ItemCount = (props) => {
  const onAdd = props.onAdd
  const stock = parseInt(props.stock);
  const qty = parseInt(props.initial)
  const [counter, setCounter] = useState(isNaN(qty)? 0 : qty);
  const price = parseInt(props.price);
  const [subTotal, setSubTotal] = useState(price * counter);
  useEffect(() => {
    setSubTotal(price * counter);
  }, [counter]);
  const agregarItem = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };
  const quitarItem = () => {
    if (counter > parseInt(props.initial)) {
      setCounter(counter - 1);
    }
  };
  const [showBtn, setShowBtn] = useState(true);
  const addProduct = () => {
    if(counter === 0){
      alert('Debe indicar cantidades mayores a 0 para agregar al carrito') 
    } else {
      onAdd(counter);
      setShowBtn(false);
    } 
  };

  return (
    <>
      <Card className="text-center counterBox">
        <Card.Body className="d-flex justify-content-center flex-column align-items-center">
          <div className="quantity">
            <h5>Cantidad</h5>
            <Card.Title className="counterPanel d-flex justify-content-between">
              <span className="counterControler" onClick={quitarItem}>
                -
              </span>
              <span>{counter}</span>
              <span className="counterControler" onClick={agregarItem}>
                +
              </span>
            </Card.Title>
          </div>
          <div className="subTotal">
            <h5>Sub Total</h5>
            <Card.Title className="counterPanel d-flex justify-content-between">
              <span className="subtotalAmount">{subTotal}</span>
            </Card.Title>
          </div>
          <div className="agregaCarritoButtonContainer">
            {showBtn ? (
              <Button variant="outline-success" onClick={addProduct}>
                Agregar al Carrito
              </Button>
            ) : (
              <>
                <Link to="/">
                  <Button variant="outline-success">Seguir comprando</Button>
                </Link>
                <Link to="/cart">
                  <Button variant="outline-success">Ir al Carrito</Button>
                </Link>
              </>
            )}
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCount;
