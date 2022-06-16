import React from 'react'
import { a } from 'react-router-dom'


export default function OrdersNavBar({ url, toggleOrdersNavbar, setToggleOrdersNavBar, setSection }) {


  return (
    <div className="main_orders_navbar" style={toggleOrdersNavbar ? {
      transform:"translateX(0)"
    } : {
      transform:"translateX(-180px)"   
    }}>
      <div className='toggle_btn_ordersnavbar' onClick={() => setToggleOrdersNavBar(!toggleOrdersNavbar)} >
        <img src="arrow_right.svg" alt=""  style={toggleOrdersNavbar ? {
                transition: "0.3s",
                transform: "rotate(0)",
            } : {
                transition: "0.3s", 
                transform: "rotate(180deg)",
            }}/>
      </div>
      <a onClick={() => setSection("promociones")}>Promociones</a>
      {/* <a exact to={`${url}/mcofertas`}>McOfertas</a> */}
      <a onClick={() => setSection("mccombo")}>McCombos</a>
      <a onClick={() => setSection("cajita feliz")}>Cajita Feliz</a>
      {/* <a exact to={`${url}/cajita_feliz_mas_opciones`}>Cajita Feliz Mas Opciones</a> */}
      <a onClick={() => setSection("sandwiches y snacks")}>Sandwiches y Snacks</a>
      <a onClick={() => setSection("postres")}>Postres</a>
      <a onClick={() => setSection("acompañamientos")}>Acompañamientos</a>
      {/* <a exact to={`${url}/desayunos_meriendas`}>Desayunos & Meriendas</a> */}
      {/* <a exact to={`${url}/ensaladas`}>Ensaladas</a> */}
      <a onClick={() => setSection("bebidas frias y calientes")}>Bebidas frias y calientes</a>


    </div>
  )
}
