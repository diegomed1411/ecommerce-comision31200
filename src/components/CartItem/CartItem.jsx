import './CartItem.css'

import React from 'react'

const CartItem = ({product}) => {  
  return (
    <div>{product.id}</div>
  )
}

export default CartItem