import createContext from "react"
import { useState } from "react"
export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [cart, setCart] = useState([])
    const addToCart = (item)=>{
        setCart(item)
    }
    return (
    <CartContext.Provider
    value = {{
        cart,
        addToCart
    }}>
        {children}
    </CartContext.Provider>
    )
}