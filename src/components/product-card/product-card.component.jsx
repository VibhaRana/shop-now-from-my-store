   import { useContext } from 'react';

    import { CartContext } from '../../contexts/cart.context';
    
    import Button from '../button/button.component';
    
    import './product-card.styles.scss';
    
    const ProductCard = ({ product }) => {
      //Destructure product properties from product in shop.json
      const { name, price, imageUrl } = product;
        //Destructure addItemToCart from CartContext
      const { addItemToCart } = useContext(CartContext);
     //Add product to cart on clicking button
      const addProductToCart = () => addItemToCart(product);
    
      return (
        <div className='product-card-container'>
          <img src={imageUrl} alt={`${name}`} />
          <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
          </div>
          <Button buttonType='inverted' onClick={addProductToCart}>
            Add to cart
          </Button>
        </div>
      );
    };
    
    export default ProductCard;