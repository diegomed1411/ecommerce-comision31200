import './CartItem.css'

import React from 'react'

const CartItem = ({product}) => {  
  return (
    <div>
        
            <li>
        <img className="imgCartItem" src={product.pictureUrl} alt="" /> 
        <span>{product.title}</span>
        <span>cantidad: {product.quantity}</span>
        <span>precio: {product.price}</span>
        <span>subtotal: {product.price*product.quantity}</span>

            </li>
        
        </div>
  )
}

export default CartItem