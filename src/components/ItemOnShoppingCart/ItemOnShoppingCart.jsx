import React from 'react'
import useItems from '../../store/UseItems';
import './ItemOnShoppingCart.css'

export default function ItemOnShoppingCart({ item }) {
    const { deleteItemFromCart, updateItem } = useItems();
    return (
        <div className='root_itemOnShoppingCart'>
            <div style={{
                backgroundImage: "url('../h.png')",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "80%",
                width: "100%",
            }}>

            </div>
            <div className='shoppingcart_details_box'>
                <div className='shoppingcart_quantity_name_box'>
                    <div>
                        <p style={{
                            fontWeight: 600
                        }}>{item && item.product.name}</p>
                        <p style={{
                            width: "100%",
                            color: "grey",
                        }}>{item && `Disponibles ${item.product.stock}`}</p>
                        {(item && item.product.enableDiscount) && <div style={{
                            color: "rgb(238, 202, 0)",
                            fontWeight: "500",
                            fontStyle: "italic",
                            top: 0,
                            left: 0,


                        }} ><span style={{
                            textDecoration: "line-through"


                        }}>${item.product.price}</span>
                            <span> {item && item.product.discount * 100}% OFF</span>
                        </div>}
                    </div>
                    <div className='shoppingcart_quantity_box' >
                        {item.product.stock > item.quantity ?
                            <div onClick={() => updateItem(item, "add")}>+</div> :
                            <div >+</div>}

                        <div>{item && item.quantity}</div>
                        <div onClick={() => updateItem(item, "minus")}>-</div>
                    </div>
                </div>
                <div className='shoppingcart_box_delete_total'>
                    <div>${(item && item.product.enableDiscount)? (item.product.price - item.product.price * item.product.discount) * item.quantity : item.product.price * item.quantity}

                    </div>
                    <div onClick={() => deleteItemFromCart(item.product.name)}>Quitar</div>
                </div>
            </div>
        </div>
    )
}
