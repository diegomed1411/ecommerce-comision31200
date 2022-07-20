import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
import emptyBox from "../../assets/static/106964-shake-a-empty-box.gif";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import { collection, getFirestore, doc, updateDoc, serverTimestamp, setDoc, increment } from "firebase/firestore";

const Cart = () => {
  const { cartList, EmptyCart, PriceTotal, QuantityTotal } =
    useContext(CartContext)
  console.log("actualmente el pedido es", cartList);
  function generarOrden(e) {
    e.preventDefault()
    let order = {}
    order.buyer = { name: "Diego", email: "d@mail.com", phone: "59899887766" }
    order.date = serverTimestamp()
    order.totalAmount = PriceTotal()

    order.items = cartList.map((i) => {
      const id = i.item.id
      const name = i.item.title
      const price = i.item.price
      const quantity = i.item.quantity

      return { id, name, price, quantity };
    });
    console.log(order)
    const createOrderInFirestore = async() =>{
      const db = getFirestore()
      const newOrderRef= doc(collection(db, "orders"))
      await setDoc(newOrderRef, order)
      return newOrderRef
    }

    createOrderInFirestore()
      .then(result => alert('se creo la orden '+ result.id))
      .then(EmptyCart())
      .catch(err => console.log(err))



    // addDoc(orderCollection, order).then((resp) => console.log(resp));
    // console.log(order);
  }
  return (
    <>
      <div>
        {cartList.length < 1 ? (
          <>
            <div className="emptyCart">
              <h4>Carrito Vacio 😦</h4>
              <img className="emptyBoxGif" src={emptyBox} alt="carrito vacio" />
              <br />
              <Link to="/">
                <Button variant="outline-success">Ir de compras</Button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <table className="table container">
              <thead>
                <tr>
                  <th scope="col">Articulo</th>
                  <th scope="col"></th>
                  <th scope="col" className="tableValues">Cantidad</th>
                  <th scope="col" className="tableValues">Precio</th>
                  <th scope="col" className="tableValues">Subtotal</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
              {cartList.map((product) => (
                <CartItem key={product.item.id} product={product.item} />
              ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Total Cantidades</th>
                  <th scope="col" className="tableValues">{QuantityTotal()}</th>
                  <th scope="col" className="tableValues">Total</th>
                  <th scope="col" className="tableValues">$ {PriceTotal()}</th>
                  <th scope="col"></th>
                </tr>
              </tfoot>
            </table>

            <Button
              className="cartBtnAction"
              variant="outline-danger"
              onClick={EmptyCart}
            >
              Borrar carrito
            </Button>
            <Link to="/">
              <Button className="cartBtnAction" variant="outline-primary">
                Seguir comprando
              </Button>
            </Link>
            <Button
              className="cartBtnAction"
              variant="outline-success"
              onClick={generarOrden}
            >
              Terminar Compra
            </Button>

            <p>El precio total de los productos es {PriceTotal()} </p>
            {QuantityTotal() < 1 ? (
              <p> </p>
            ) : (
              <p>La cantidad total del carrito es {QuantityTotal()}</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
