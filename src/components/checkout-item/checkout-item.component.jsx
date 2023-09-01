import './checkout-item.styles'
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className='checkout-item-container'>
           <div className='image-container'>
           <img src={imageUrl} alt={`${name}`} />
            </div> 
            <span className='name'> {name} </span>
        </div>
    )
}

export default CheckoutItem