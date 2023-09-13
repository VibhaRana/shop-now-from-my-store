import { createContext, useEffect, useState } from 'react';

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

//Remove item from cart
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

 // Clear item from checkout page on clicking remove button
const clearCartItem = (cartItems, cartItemToClear) => {
  //  filter out the cart item to clear
  return cartItems.filter(cartItem => cartItem.id !== cartItemToClear.id)
}


export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  cartCount: 0,
  total: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const[cartTotal, setCartTotal] = useState(0);
  
  // Cart Count for Quantity. Like how many items are there in the cart
  useEffect(() => {
    const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  // Cart Total for Checkout Page
  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0)
    setCartTotal(newCartTotal)
  }, [cartItems])



  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

    const  removeItemFromCart = (cartItemToRemove) =>
      setCartItems(removeCartItem(cartItems, cartItemToRemove));
  
      const  clearItemFromCart = (cartItemToClear) =>
      setCartItems(clearCartItem(cartItems, cartItemToClear));

      const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
         cartCount,
        cartTotal,
      };
    
      return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
  }

