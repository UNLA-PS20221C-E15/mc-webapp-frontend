import { createContext, useEffect, useState } from 'react';
import db_products from '../products.json'

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [products, setProducts] = useState(db_products);
    const [product_selected, setProductSelected] = useState(JSON.parse(localStorage.getItem("product_selected")) || undefined);
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
        },

        selectItemToView(id) {
            let index = products.findIndex((p) => p.id === id);
            setProductSelected(products[index]);
            localStorage.setItem("product_selected", JSON.stringify(products[index]));
        },

    }

    return (
        <ProductContext.Provider value={contextValue}>
            {children}
        </ProductContext.Provider>
    )

}
