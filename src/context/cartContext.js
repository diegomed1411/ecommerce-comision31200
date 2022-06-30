import { useState, createContext } from "react"
export const CartContext = createContext([])

export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const addToCart = (item)=>{
        if (IsInCart(item.id)) {
            let itemIndex = cartList.findIndex(item)
            let newCart = cartList.splice(0, itemIndex, item)
            setCartList(newCart)
            alert("El producto ya se encuentra en el carrito y se agrergaron "+item.quantity+" articulos al carrito")
          } else {
            setCartList([...cartList, {item}])
            alert("Se agrego el producto correctamente");
          }
        
    }

    const DelItem = (id) => {
        const items = cartList.filter((product)=> product.item.id !== id)
        setCartList(items)
        return
      }
    
      const QuantityTotal = () => {
        return cartList.reduce((acum, i)=> acum + i.item.quantity, 0)
      }
    
      const PriceTotal = () => {
        return cartList.reduce((acum, i) => acum + i.item.quantity * i.item.price, 0)
      }
    
      const EmptyCart = () =>{
        return setCartList([])
      }
    
      const IsInCart = (id) => {
        return cartList && cartList.some((i) => i.item.id === id);
      };

    return (
    <CartContext.Provider
    value = {{
        addToCart, cartList, EmptyCart, DelItem, PriceTotal, QuantityTotal
    }}>
        {children}
    </CartContext.Provider>
    )
}