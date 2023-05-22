// Desc: Context for products
import React, { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json"

//Create Context
export const ProductsContext = createContext({
   products: []
})

//Create Provider
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products}
 return (
 <ProductsContext.Provider value={value}>
        {children}
 </ProductsContext.Provider>
 )
}
