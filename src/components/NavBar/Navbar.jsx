import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  return (
    <div className="main_navbar">
        <NavLink activeClassName="active_main_navbar_option" to="/"><img src='../mcdonalds.png' width="23" alt="mc_icon"/>Home</NavLink>
        <NavLink to="/">Pedidos</NavLink>
        <NavLink to="/">Ofertas</NavLink>
        <NavLink to="/">Mis Cupones</NavLink>
        <NavLink to="/">McDelivery</NavLink>
        <NavLink to="/">Stickers</NavLink>
        <NavLink to="/">Login/Perfil</NavLink>
        <NavLink to="/">Restaurantes</NavLink>
        <NavLink to="/">Menu</NavLink>
    </div>
  )
}
