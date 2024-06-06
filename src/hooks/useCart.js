import { useContext } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) throw new Error("no puede usarse con el carrito vacio ")

  return context
}