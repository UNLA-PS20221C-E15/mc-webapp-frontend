import React from 'react'
import useItems from '../../store/UseItems'
import './CheckOutPage.css'
import ItemOnShoppingCart from '../../components/ItemOnShoppingCart/ItemOnShoppingCart'

export default function CheckOutPage() {

    const { shoppingCart,getTotal} = useItems();
    return (
        <div className='root_checkoutpage'>
            <div className='main_container_checkoutpage'>
                <div className='checkoutpage_item_container'>
                    {shoppingCart && shoppingCart.map((i, k) => (
                        <ItemOnShoppingCart item={i} key={k} />
                    ))}
                </div>
                <div className='checkoutpage_box_detail'>
                    <button>Comprar</button>
                    <div>
                        <p>Total</p>
                        <p>${getTotal()}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
