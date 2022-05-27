import { createContext, useState } from 'react';

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(undefined);

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
