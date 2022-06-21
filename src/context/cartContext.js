import { useState, createContext } from "react"
export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const addToCart = (item)=>{
        setCartList([...cartList, {item}])
    }
    return (
    <CartContext.Provider
    value = {{
        cartList,
        addToCart,
    }}>
        {children}
    </CartContext.Provider>
    )
}