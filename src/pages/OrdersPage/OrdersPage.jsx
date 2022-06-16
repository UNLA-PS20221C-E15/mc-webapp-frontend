import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Product from '../../components/Product/Product';
import useProducts from '../../store/UseProduct';

import './OrdersPage.css'
export default function OrdersPage({ toggleOrdersNavbar, setToggleOrdersNavBar, section }) {
  const { products } = useProducts();
  const [filteredProduct, setFilteredProducts] = useState(products);
  useEffect(()=> {
    (section !== "all" && section !== "promociones" ) && setFilteredProducts(products.filter((p) => p.category == section)) ;
    (section === "promociones" ) && setFilteredProducts(products.filter((p) => p.enableDiscount)) ;

  },[section]);
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
        {products && filteredProduct.map((i, k) => (
          <Product  stock={i.stock} key={k} img={i.img} price={i.price} discount={i.discount} enableDiscount={i.enableDiscount} name={i.name} id={i.id}  />
        ))}
      </div>

    </div>
  )
}
