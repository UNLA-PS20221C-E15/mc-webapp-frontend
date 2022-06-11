import { createContext, useState } from 'react';

export const ItemContext = createContext();

export default function ItemsProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState(JSON.parse(localStorage.getItem("shoppingCart")) || []);

    const contextValue = {
        shoppingCart,
        updateItem: (item, action) => {
            let index = shoppingCart.findIndex((i) => i.product.name === item.product.name);
            if (index >= 0) {
                switch (action) {
                    case "add":
                        shoppingCart[index].quantity++;
                        break;
                    case "minus":
                        shoppingCart[index].quantity--;
                        break;
                }
                if(shoppingCart[index].quantity <= 0)
                    shoppingCart.splice(index, 1);
                
                setShoppingCart([...shoppingCart]);
                localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));

            }
        },

        addItemToCart: (product) => {
            let index = shoppingCart.findIndex((i) => i.product.name === product.name);
            if (index < 0) {
                let item = {
                    product,
                    quantity: 1,
                };
                shoppingCart.push(item);
            } else
                shoppingCart[index].quantity++;

            setShoppingCart([...shoppingCart]);
            localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));
        },
        deleteItemFromCart: (name) => {
            let index = shoppingCart.findIndex((i) => i.product.name === name);
            shoppingCart.splice(index, 1);
            setShoppingCart([...shoppingCart]);
            localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));
        },

        deleteItems: (items) => {

        },
        getTotalItems: ()=>{
            let total = 0;
            return shoppingCart.map((i) => total += i.quantity);
        }


    }

    return (
        <ItemContext.Provider value={contextValue}>
            {children}
        </ItemContext.Provider>
    )

}
