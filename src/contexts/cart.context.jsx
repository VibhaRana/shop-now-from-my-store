import { createContext, useState } from 'react';

//Add item to cart
export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

//remove item from cart
export const removeCartItem = (cartItems, cartItemToRemove) => {
    // find the cart item to remove
   const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
   )
 // check if quantity is equal to 1, if it is remove that item from the cart
  if(existingCartItem.quantity === 1){
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id)
  }

  
  // if quantity is not equal to 1, decrease the quantity by 1
  return cartItems.map(cartItem =>
    cartItem.id === cartItemToRemove.id
    ? {...cartItem, quantity: cartItem.quantity - 1}
    : cartItem
    )


};


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

    const  removeItemFromCart = (cartItemToRemove) =>
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
  
      const  clearItemFromCart = (cartItemToRemove) =>
      setCartItems(removeCartItem(cartItems, cartItemToRemove));

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart, 
    removeItemFromCart,
    clearItemFromCart};

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};