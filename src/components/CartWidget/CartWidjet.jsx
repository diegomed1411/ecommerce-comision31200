import React from 'react'
import { useContext } from 'react'
import balija from '../../assets/static/icono_equipaje.png'
import { CartContext } from '../../context/cartContext'
import './CartWidget.css'

const CartWidjet = () => {
  const {QuantityTotal} = useContext(CartContext)
  return (
    QuantityTotal() >0 ?
    <div className='cartWidgetContainer'>
    <img src= {balija} alt="balija de compras" id="balija" />
    <p>{QuantityTotal()}</p>
    </div>
    : ""
  )
}

export default CartWidjet