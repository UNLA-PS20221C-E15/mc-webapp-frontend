import React from 'react'
import './ItemOnShoppingCart.css'

export default function ItemOnShoppingCart() {
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
            <div>
                <p>Big Mac</p>
                <div>
                    <p>+</p>
                    <p>1</p>
                    <p>-</p>    
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
