import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import emptyBox from "../../assets/static/106964-shake-a-empty-box.gif";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { collection, getFirestore, addDoc } from "firebase/firestore"

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, QuantityTotal } = useContext(CartContext);
  function generarOrden(e){
    e.preventDefault()
    let order={}
    order.buyer = {name: 'Diego', email: 'd@mail.com', phone: '59899887766'}
    order.totalAmount = PriceTotal()

    order.items = cartList.map(i =>{
      const id= i.id
      const name = i.title
      const price= i.price
      const quantity = i.quantity

      return {id, name, price, quantity}
    })
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order)
    .then(resp=> console.log(resp))
    console.log(order)

  }
  return (
    <>
      <ul>
        {cartList.length < 1 ? (
          <>
            <h4>Carrito Vacio 😦</h4>
            <img className="emptyBoxGif" src={emptyBox} alt="carrito vacio" />
            <br />
            <Link to="/">
              <Button variant="outline-success">Ir de compras</Button>
            </Link>
          </>
        ) : (
          <>
            {cartList.map((product) => (
              <CartItem key={product.item.id} product={product.item} />
            ))}
            <Button className="cartBtnAction" variant="outline-danger" onClick={EmptyCart}>
              Borrar carrito
            </Button>
            <Link to="/">
              <Button className="cartBtnAction" variant="outline-primary">Seguir comprando</Button>
            </Link>
            <Button className="cartBtnAction" variant="outline-success" onClick={generarOrden}>Terminar Compra</Button>

            <p>El precio total de los productos es {PriceTotal()} </p>
            {QuantityTotal() < 1 ? (
              <p> </p>
            ) : (
              <p>La cantidad total del carrito es {QuantityTotal()}</p>
            )}
          </>
        )}
      </ul>
    </>
  );
};

export default Cart;
