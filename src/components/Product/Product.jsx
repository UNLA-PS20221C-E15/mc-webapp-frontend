import React from 'react'
import useItems from '../../store/UseItems';
import './Product.css'

export default function Product({ img, price, name, discount, enableDiscount,stock }) {
    const {addItemToCart} = useItems();
    return (
        <div className='root_product' style={{
            backgroundImage: `url("${img}")`,
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",

        }}>
            {enableDiscount &&
                <div style={{
                    width:"50px",
                    height:"150px",
                    backgroundColor:"rgba(0, 0, 0, 0.926)",
                    position: "absolute",
                    top: "-65px",
                    right: "0",
                    transform:"rotate(130deg)",
                    animation:"fade-in 0.6s"
                }}>
                </div>
                }
            {enableDiscount &&
                <div style={{
                    position: "absolute",
                    top: "5px",
                    right: "6px",
                    fontWeight: 800,
                    fontSize: "25px",
                    color: "rgb(255, 136, 0)",
                    animation:"fade-in 0.4s"
                }}>
                    <p>{discount * 100}%</p>
                </div>
            }
            <div className='product_box_price_and_name'>
                <p>{name}</p>
                {enableDiscount &&
                    <p className='product_oldprice' >${price}</p>
                }
                <p style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                }}>${!enableDiscount ? price : price - price * discount}</p>

            </div>
            <div className='product_box_btns_add_buy'>
                <button>Comprar</button>
                <button onClick={() => addItemToCart({ img, price, name, discount, enableDiscount, stock })} >Agregar</button>
            </div>

        </div >
    )
}
