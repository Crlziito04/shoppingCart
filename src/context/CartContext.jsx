import { createContext, useReducer, useState } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()


export function CartProvider({ children }) {

  const { state, clearCart, addToCart, removeFromCart } = useCartReducer()

  // const [cart, setCart] = useState([])

  // const addToCart = product => {
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)

  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart)

  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }

  //   //*Producto no esta en carro
  //   setCart(prevState => ([
  //     ...prevState,
  //     {
  //       ...product,
  //       quantity: 1
  //     }
  //   ]))
  // }

  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }

  // const clearCart = () => {
  //   setCart([])
  // }

  return (
    <CartContext.Provider value={{
      cart: state, addToCart, clearCart, removeFromCart
    }}>
      {children}
    </CartContext.Provider>
  )
}