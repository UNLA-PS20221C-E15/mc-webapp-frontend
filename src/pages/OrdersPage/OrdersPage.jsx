import React from 'react'
import Product from '../../components/Product/Product';
import useProducts from '../../store/UseProduct';

import './OrdersPage.css'
export default function OrdersPage({ toggleOrdersNavbar, setToggleOrdersNavBar }) {
  const { products } = useProducts();
  
  
  return (
    <div className='root_orderspage' >
      <div className='orderspage_navbar_space'
        style={toggleOrdersNavbar ? {
          transition: "0.3s",
          width: "20%",
          minWidth: "220px",
        } : {
          transition: "0.3s",
          width: "0%",
          minWidth: "0px",
        }}
      >

      </div>
      <div className='orderspage_products_container'>
        {products && products.map((i, k) => (
          <Product key={k} img={i.img} price={i.price} discount={i.discount} enableDiscount={i.enableDiscount} name={i.name} />
        ))}
      </div>

    </div>
  )
}
