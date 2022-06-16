import React from 'react'
import { NavLink } from 'react-router-dom';
import useItems from '../../store/UseItems';
import useProducts from '../../store/UseProduct';
import './Product.css'

export default function Product({ img, price, name, discount, enableDiscount,stock,id }) {

    const { selectItemToView } = useProducts();
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
                    fontSize: "17px",
                    fontWeight: "600",
                }}>${!enableDiscount ? price : price - price * discount}
                </p>

            </div>
            <div className='product_box_btns_add_buy'>
                <NavLink onClick={() => selectItemToView(id)} to={`/single_view_product/${name}`}>Comprar</NavLink>
                <button onClick={() => addItemToCart({ img, price, name, discount, enableDiscount, stock, id })} >Agregar</button>
            </div>

        </div >
    )
}
