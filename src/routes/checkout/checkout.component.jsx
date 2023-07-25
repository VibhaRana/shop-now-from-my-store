import './checkout.styles.scss'

import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'

const Checkout = () => {
  // The Checkout component imports the CartContext and useContext to access the cart items and the addItemToCart function.
  const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext)



  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div  className='header-block'>
          <span>Price</span>
        </div>
        <div >
          <span>Remove</span>
        </div>
        {/* Map the cartItems */}
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>Decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>Increment</span>
            </div>
          )
        })}
        <span className='total'>Total: 0</span>
      </div>
    </div>
  )
}

export default Checkout
