import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const {cartList} = useContext(CartContext)
  return (
    <><ul>
      {cartList.length < 1 ? (
        <p>Carrito vacio</p>
      ) : (
        cartList.map((product) => <CartItem key={product.item.id} product={product.item}/>)
      )}
    </ul>
    </>
  )
}

export default Cart