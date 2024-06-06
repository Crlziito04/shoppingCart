import { useContext } from 'react'
import './Footer.css'
import { FilterContext } from '../context/filter'
//import { useCart } from '../hooks/useCart'

export function Footer() {
  const { filters } = useContext(FilterContext)

  //const { cart } = useCart()

  return (
    <footer className='footer'>
      {JSON.stringify(filters, null, 2)}
      {/* {JSON.stringify(cart, null, 2)} */}
      <h4>Prueba técnica de React ⚛️ － <span>@crlziito04</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
    </footer>
  )
}