//Desc: Context for Cart
import React, { createContext, useState } from "react";

//Create Context for Cart
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
})

//Create Provider for Cart
export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

