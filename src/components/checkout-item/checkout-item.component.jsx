import './checkout-item.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react'


const CheckoutItem = ({cartItem}) => {
   const { name, imageUrl, price, quantity } = cartItem;
   const { clearItemFromCart,  addItemToCart, removeItemFromCart } = useContext(CartContext)
   // Create a handler function called addItemHandler that calls the addItemToCart function and passes the cartItem as a parameter.
   const addItemHandler = () => {
      addItemToCart(cartItem)
   }

   // Create a handler function called removeItemHandler that calls the removeItemFromCart function and passes the cartItem as a parameter.
   const removeItemHandler = () => {
      removeItemFromCart(cartItem)
   }
    
   // Create a handler function called clearItemHandler that calls the clearItemFromCart function and passes the cartItem as a parameter.
const clearItemHandler = () => {
       clearItemFromCart(cartItem)
    }
   return (
      <div className='checkout-item-container'>
         {/* Image */}
      <div className='image-container'>
         <img src={imageUrl} alt='{`${name}`}' />
         </div>
         {/* Name */}
         <span className='name'>{name}</span>
         {/* Quantity */}
         <span className='quantity'>
            <div className='arrow' onClick={ removeItemHandler}>&#10094;</div>
            <span className='value'>{quantity}</span>
            <div className='arrow' onClick={ addItemHandler}>&#10095;</div>
         </span>
        {/* Price */}
      <span className='price'>{price}</span>
         <div className='remove-button' onClick =  {clearItemHandler }>
        &#10005;
      </div>
        
   </div>
)
   
}
         

export default CheckoutItem;

         
