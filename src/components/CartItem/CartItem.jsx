import './CartItem.css'

import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'

const CartItem = ({product}) => {
  const {DelItem} = useContext(CartContext)  
  return (
    <div>
        
            <li>
        <img className="imgCartItem" src={product.pictureUrl} alt="" /> 
        <span>{product.title}</span>
        <span>cantidad: {product.quantity}</span>
        <span>precio: {product.price}</span>
        <span>subtotal: {product.price*product.quantity}</span>
        <span onClick={() => DelItem(product.id)}>🗑️​</span>

            </li>
        
        </div>
  )
}

export default CartItem