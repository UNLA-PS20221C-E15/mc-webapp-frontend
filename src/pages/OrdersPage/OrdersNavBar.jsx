import React from 'react'
import { NavLink } from 'react-router-dom'


export default function OrdersNavBar({url}) {
  return (
    <div className="main_orders_navbar">
            
            <NavLink activeClassName="active_order_navbar" exact to={`${url}/promociones`}>Promociones</NavLink>
            <NavLink to={`${url}/mcofertas`}>McOfertas</NavLink>
            <NavLink to={`${url}/mccombos`}>McCombos</NavLink>
            <NavLink to={`${url}/cajita_feliz`}>Cajita Feliz</NavLink>
            <NavLink to={`${url}/cajita_feliz_mas_opciones`}>Cajita Feliz Mas Opciones</NavLink>
            <NavLink to={`${url}/sandwiches_snacks`}>Sandwiches y Snacks</NavLink>           
            <NavLink to={`${url}/postres`}>Postres</NavLink>           
            <NavLink to={`${url}/acompañamientos`}>Acompañamientos</NavLink>           
            <NavLink to={`${url}/desayunos_meriendas`}>Desayunos & Meriendas</NavLink>           
            <NavLink to={`${url}/ensaladas`}>Ensaladas</NavLink>           
            <NavLink to={`${url}/bebidas_frias_calientes`}>Bebidas frias y calientes</NavLink>           

        
    </div>
  )
}
