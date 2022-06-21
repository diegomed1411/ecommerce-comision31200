import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem';
import'./Cart.css'

const Cart = () => {
  const {cartList, EmptyCart, PriceTotal, QuantityTotal} = useContext(CartContext)
  return (
    <><ul>
      {cartList.length < 1 ? (
        <h3>Carrito vacio</h3>
      ) : (
        <>
        {cartList.map((product) => <CartItem key={product.item.id} product={product.item}/>)}
        <button onClick={EmptyCart}> Borrar carrito</button>
        <p>El precio total de los productos es {PriceTotal()} </p>
        {QuantityTotal() < 1? <p> </p>:<p>La cantidad total del carrito es {QuantityTotal()}</p>}
        </>
      )}
    </ul>

    
    </>
  )
}

export default Cart