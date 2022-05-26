import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import ProductService from '../services/productService';


export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(undefined);

    const contextValue = {
        products,
        product_selected,
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
