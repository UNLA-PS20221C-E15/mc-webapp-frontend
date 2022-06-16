import React from 'react'
import { NavLink } from 'react-router-dom';
import useItems from '../../store/UseItems';
import useProducts from '../../store/UseProduct';
import './SingleViewProductPage.css'

export default function SingleViewProduct() {
    const { product_selected } = useProducts();
    const { addItemToCart } = useItems();

    return (
        <div className='root_single_view_product_page'>
            <div className='single_view_product_main_box' >
                <div className='single_view_product_box_image' style={product_selected && {
                    backgroundImage: `url('../${product_selected.img}')`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                }}>

                </div>
                <div className='single_view_product_box_details' >
                    <div>{product_selected && product_selected.name}</div>
                    <div>
                        {(product_selected && product_selected.enableDiscount) &&
                            <p className='single_product_old_price' >${product_selected.price} </p>
                        }
                        <p style={{
                            textDecoration: "none",
                            fontSize: "35px",
                            fontWeight: "600",
                            position:"relative",

                        }}>${(product_selected && !product_selected.enableDiscount) ? product_selected.price : product_selected.price - product_selected.price * product_selected.discount}
                            {(product_selected && product_selected.enableDiscount) && <span style={{
                                position:"absolute",
                                color:"rgb(238, 202, 0)",
                                fontWeight: "500",
                                fontStyle:"italic",
                                transform:"translateX(5px)"

    
                            }} >{product_selected && product_selected.discount * 100}% OFF</span>}
                        </p>
                    </div>
                    <div className='calories'>{product_selected && product_selected.calories}</div>
                    <div  className='description'>{product_selected && product_selected.description}</div>
                    <div className='single_view_btns'>
                        {/* <NavLink to="/" >Comprar</NavLink> */}
                        <button onClick={() => addItemToCart(product_selected)}>Agregar</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
