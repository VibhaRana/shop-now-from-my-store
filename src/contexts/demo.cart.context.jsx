// Imagine you have a shopping cart, just like the one you use when you go to the store. This code is like a special box that helps you keep track of what you put in your cart when you're shopping online.

// First, we have a function called addCartItem that helps us check if something is already in the cart. It looks at what's already in the cart and sees if the thing we want to add is already there. If it is, it increases the number of that item. If it's not there, it adds the item to the cart.

// Then, we create a special box called CartContext that holds information about our cart. Inside the box, we have a few things: whether the cart is open or closed, a list of items in the cart, and a way to add items to the cart.

// Next, we make another special box called CartProvider. This box is responsible for managing the cart. It keeps track of whether the cart is open or closed and the list of items inside the cart.

// When we want to add something to the cart, we use the addItemToCart function. It's like pressing a button that says "Add to Cart". When we press that button, the box knows to add the item to the cart. It uses the addCartItem function we talked about earlier to check if the item is already in the cart. If it is, it adds more of that item. If it's not, it puts the new item in the cart.

// Finally, we put all of our things in the special box called CartProvider. This makes sure that all the other parts of our website can use the cart and know what's inside it. It's like putting our special cart box in the right place so we can see it and use it when we need to.


// So, this code helps us keep track of the things we want to buy. It has a special box that knows if the cart is open or closed, what's inside the cart, and how to add things to the cart. It helps us with our online shopping!






                                       //Cart Context Explained In Detail

// The code imports the necessary dependencies, including React, createContext, and useState from React.
import React, { createContext, useState } from "react";

// Next, a helper function called addCartItem is defined. This function is responsible for checking if a given productToAdd already exists in the cartItems array. If it does, it increments the quantity of that item. This function uses the find method to search for an existing cart item with the same id as productToAdd and the map method to create a new array with the updated quantity.
const addCartItem = (cartItems, productToAdd) => {
    //Find if cart items contains productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    //If productToAdd is in cartItems, increment quantity
    if(existingCartItem){
        return cartItems.map((cartItem) => 
            cartItem.id === productToAdd.id
            // creates new cartItem object with same props as cartItems, but increments quantity prop
            ? {...cartItem, quantity: cartItem.quantity + 1}
            // If false, return the cartItem
            : cartItem
            )
    }
    // return new array with modifies cartItems/new cart item 
    return [...cartItems, {...productToAdd, quantity: 1}]


}

// A context object called CartContext is created using the createContext function. 
// It provides default values for the cart context, including isCartOpen (a boolean representing whether the cart is open or not), setIsCartOpen (a function to update the cart's open/close state), cartItems (an array representing the items in the cart), and addItemToCart (a function to add items to the cart).
//Create Context for Cart
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
  })



// Another component called CartProvider is defined. It receives a children prop, representing the child components that will be wrapped inside this provider.
export const CartProvider = ({ children }) => {

// Inside the CartProvider component, two state variables are initialized using the useState hook. isCartOpen represents the open/close state of the cart, and cartItems holds the items in the cart.
const [isCartOpen, setIsCartOpen] = useState(false);
const[cartItems, setCartItems] = useState([]);

// The addItemToCart function is defined within the CartProvider component. It takes a productToAdd parameter and is triggered when the user clicks on the "Add to Cart" button. This function uses the addCartItem helper function to update the cartItems state by adding the new item or incrementing the quantity if the item already exists.
 //Triggers when user click on "Add to Cart" button
 const addItemToCart = (productToAdd) => {
    //Update cart items
  setCartItems(addCartItem(cartItems, productToAdd))
    }

// The value object is created, which contains the values and functions to be provided by the cart context. 
const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

// Finally, the CartProvider component wraps the children components with the CartContext.Provider component. It provides the value object as the value prop to make the context values accessible to the child components.
return (
    <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
)
}

// Detailed Explanatio REMOVETOCART FUNCTIONn:

// The code defines a function called removeCartItem that takes two parameters: cartItems and cartItemToRemove.

// cartItems: This is an array that represents all the items currently in the shopping cart. Each item is an object with different properties like id (a unique identifier for each toy) and quantity (how many of that toy are in the cart).

// cartItemToRemove: This is an object that represents the specific toy you want to remove from the cart. It also has an id property to identify which toy it is.

// Now, let's see how the code works:

// The function starts by searching for the toy to be removed in the cartItems array. It uses the find method, which looks at each item in the array and checks if its id matches the id of the cartItemToRemove. When it finds a match, it saves that item in a variable called existingCartItem.

// Next, the code checks if the quantity of the existingCartItem is equal to 1. If there's only one of that toy in the cart, it means we want to remove it completely.

// If the quantity is indeed equal to 1, the code uses the filter method on the cartItems array. The filter method creates a new array that includes all items from the original array except the one that matches the cartItemToRemove. This way, the specific toy is completely removed from the cart.

// On the other hand, if the quantity of the existingCartItem is more than 1, it means we just want to take away one of that toy from the cart, not all of them.

// In this case, the code uses the map method on the cartItems array. The map method creates a new array by going through each item in the original array.

// If the id of an item in the cartItems array matches the id of the cartItemToRemove, it means this is the toy we want to decrease the quantity of.

// The code creates a new object with the same properties as the original item, but it decreases the quantity property by 1, as we want one less of that toy in the cart.

// If the id of an item doesn't match the id of the cartItemToRemove, it means it's not the toy we want to remove, so the code keeps the item as it is in the new array.

// The function then returns the new array, which either has the specific toy completely removed or one less of that toy, based on the quantity.

// That's it! The removeCartItem function helps manage the shopping cart by letting us take toys out of it, either completely or just a few, depending on what we want.
//  // find the cart item to remove
//  const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );
//  // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }
//   // if quantity is not equal to 1, decrease the quantity by 1
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );