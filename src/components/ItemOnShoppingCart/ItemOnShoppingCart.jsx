import React from 'react'
import useItems from '../../store/UseItems';
import './ItemOnShoppingCart.css'

export default function ItemOnShoppingCart({item}) {
    const {deleteItemFromCart} = useItems();
    return (
        <div className='root_itemOnShoppingCart'>
            <div style={{
                backgroundImage:"url('../h.png')",
                backgroundSize:"100%",
                backgroundRepeat:"no-repeat",
                height:"80%",
                width:"50px",
            }}>

            </div>
            <div  className='shoppingcart_quantity_name_box'>
                <p>{item && item.product.name}</p>
                <div className='shoppingcart_quantity_box' >
                    <div>+</div>
                    <div>{item && item.quantity}</div>
                    <div>-</div>    
                </div>
            </div>
            <div className='shoppingcart_box_delete_total'>
                <div>${item && item.product.price * item.quantity}</div>
                <div onClick={() => deleteItemFromCart(item.product.name)}>Quitar</div>
            </div>
        </div>
    )
}
