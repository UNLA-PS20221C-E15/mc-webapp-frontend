import { createContext, useState } from 'react';

export const ItemContext = createContext();

export default function ItemsProvider({ children }) {
    const [shoppingCart, setShoppingCart] = useState(JSON.parse(localStorage.getItem("shoppingCart")) || []);

    const contextValue = {
        shoppingCart,
        updateItem: (item, action) => {
            let index = shoppingCart.findIndex((i) => i.product.id === item.product.id);
            if (index >= 0) {
                switch (action) {
                    case "add":
                        (shoppingCart[index].quantity < shoppingCart[index].product.stock) && shoppingCart[index].quantity++;
                        break;
                    case "minus":
                        shoppingCart[index].quantity--;
                        break;
                }
                if (shoppingCart[index].quantity <= 0)
                    shoppingCart.splice(index, 1);

                setShoppingCart([...shoppingCart]);
                localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));

            }
        },

        addItemToCart: (product) => {
            let index = shoppingCart.findIndex((i) => i.product.id === product.id);
            if (index < 0) {
                let item = {
                    product,
                    quantity: 1,
                };
                shoppingCart.push(item);
            } else if (shoppingCart[index].quantity < shoppingCart[index].product.stock) shoppingCart[index].quantity++;


            setShoppingCart([...shoppingCart]);
            localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));
        },
        deleteItemFromCart: (id) => {
            let index = shoppingCart.findIndex((i) => i.product.id === id);
            shoppingCart.splice(index, 1);
            setShoppingCart([...shoppingCart]);
            localStorage.setItem("shoppingCart", JSON.stringify([...shoppingCart]));
        },

        deleteItems: (items) => {

        },
        getTotalItems: () => {
            let total = 0;
            return shoppingCart.map((i) => total += i.quantity);
        },
        getTotal: () => {
            let total = 0;
            shoppingCart.map((item) =>{
                total += item.product.enableDiscount ? (item.product.price - item.product.price * item.product.discount) * item.quantity : item.product.price * item.quantity;
            })
            return total;
        }



    }

    return (
        <ItemContext.Provider value={contextValue}>
            {children}
        </ItemContext.Provider>
    )

}
