import React, { useState } from 'react'
import './LatShoppingCart.css'
import ItemOnShoppingCart from '../ItemOnShoppingCart/ItemOnShoppingCart'
import useItems from '../../store/UseItems';



export default function LatShoppingCart() {
    const [toggle, setToggle] = useState(true);
    const {shoppingCart,getTotalItems} = useItems();
   
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
                    {shoppingCart && shoppingCart.map((i,k) => (
                        <ItemOnShoppingCart item={i} key={k}/>
                    ))}
                </div>
                <div>

                </div>
            </div>
            <div className='toggle_btn_shoppingcart' 
            onClick={() => setToggle(!toggle)} 
            // style={toggle ? {
            //     transition: "0.3s",
            //     transform: "rotate(0)",
            // } : {
            //     transition: "0.3s", 
            //     transform: "rotate(360deg)",
            // }}
            >
                <img src="shopping_bag.png" alt="" />
                {getTotalItems()[0] > 0 && <div style={{
                    position:"absolute",
                    top:0,
                    right:0,
                    background:"rgb(255, 166, 0)",
                    padding:"1px 4px",
                    borderRadius:"50%",
                    color:"white",
                    fontSize:"1px"

                }}>{getTotalItems()[0]}</div> }
            </div>
        </div>
    )
}
