import { useId } from "react";
import './Cart.css'
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckoutId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckoutId}>
        <CartIcon />
      </label>

      <input id={cartCheckoutId} type="checkbox" hidden />

      <aside className="cart">
        <ul>
          {cart.map(product => (
            <CartItem key={product.id}
              {...product}
              addToCart={() => addToCart(product)} />

          ))}
        </ul>

        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}