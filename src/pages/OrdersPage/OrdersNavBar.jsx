import React from 'react'
import { NavLink } from 'react-router-dom'


export default function OrdersNavBar({ url, toggleOrdersNavbar, setToggleOrdersNavBar }) {


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
      <NavLink activeClassName="active_order_navbar" exact to={`${url}/promociones`}>Promociones</NavLink>
      <NavLink exact to={`${url}/mcofertas`}>McOfertas</NavLink>
      <NavLink exact to={`${url}/mccombos`}>McCombos</NavLink>
      <NavLink exact to={`${url}/cajita_feliz`}>Cajita Feliz</NavLink>
      <NavLink exact to={`${url}/cajita_feliz_mas_opciones`}>Cajita Feliz Mas Opciones</NavLink>
      <NavLink exact to={`${url}/sandwiches_snacks`}>Sandwiches y Snacks</NavLink>
      <NavLink exact to={`${url}/postres`}>Postres</NavLink>
      <NavLink exact to={`${url}/acompañamientos`}>Acompañamientos</NavLink>
      <NavLink exact to={`${url}/desayunos_meriendas`}>Desayunos & Meriendas</NavLink>
      <NavLink exact to={`${url}/ensaladas`}>Ensaladas</NavLink>
      <NavLink exact to={`${url}/bebidas_frias_calientes`}>Bebidas frias y calientes</NavLink>


    </div>
  )
}
