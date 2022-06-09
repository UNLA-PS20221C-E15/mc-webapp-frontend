import React, { useState } from 'react'
import './LatShoppingCart.css'
import ItemOnShoppingCart from '../ItemOnShoppingCart/ItemOnShoppingCart'


export default function LatShoppingCart() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='root_latshoppingcart' style={toggle ? {
            transition:"0.4s",
            transform:"translateX(100%)"
        }: {
            transition:"0.4s",
            transform:"translateX(0%)"
        }}>
            <div >
                <div className='latshoppingcart_item_container'>
                    <ItemOnShoppingCart />
                    <ItemOnShoppingCart />
                    <ItemOnShoppingCart />
                </div>
                <div>

                </div>
            </div>
            <div className='toggle_btn_shoppingcart' onClick={() => setToggle(!toggle)} style={toggle ? {
                transition: "0.3s",
                transform: "rotate(0)",
            } : {
                transition: "0.3s", 
                transform: "rotate(180deg)",
            }}>
                <img src="arrow_right.svg" alt="" />
            </div>
        </div>
    )
}
