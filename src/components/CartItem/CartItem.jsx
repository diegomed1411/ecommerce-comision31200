import './CartItem.css'
import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { Link } from "react-router-dom";
import trash from '../../assets/static/icons8-basura-50.png'

const CartItem = ({product}) => {
  const {DelItem} = useContext(CartContext)  
  return (

    <tr>      
        <th className="imgTable">
        <Link to={`/detalle/${product.id}`}>
          <img className="imgCartItem" src={product.pictureUrl} alt="" /> 
          </Link>  
          </th>
        <td>{product.title}</td>
        <td className="tableValues">{product.quantity}</td>
        <td className="tableValues">$ {product.price}</td>
        <td className="tableValues">$ {product.price*product.quantity}</td>          
      
        <td onClick={() => DelItem(product.id)}><img className="trashIcon" src={trash} alt="tacho de basura" /></td>        
        </tr>
  )
}

export default CartItem