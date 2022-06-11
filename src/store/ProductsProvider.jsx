import { createContext, useEffect, useState } from 'react';
import db_products from '../products.json' 

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(db_products);

    const contextValue = {
        products,
        updateProduct: (product) => {
        },

        createProduct: (product) => {
        },

        deleteProduct: (name) => {
        },

        deleteProducts: (products) => {
        }

    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )

}
