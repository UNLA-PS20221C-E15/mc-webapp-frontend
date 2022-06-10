import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {
  const [userLogged, setUserLogged] = useState(false);
  return (
    <div className="main_navbar">
      <NavLink exact to="/" activeClassName="active_main_navbar_option"><img src='../mcdonalds.png' alt="mc_icon" />Home</NavLink>
      <NavLink exact to="/orders" activeClassName="active_main_navbar_option"><img src='../takeout_box.svg' alt="mc_icon" />Pedidos</NavLink>
      <NavLink exact to="/offers" activeClassName="active_main_navbar_option"><img src='../percent.png' alt="mc_icon" />Ofertas</NavLink>
      <NavLink exact to="/discount_tickets" activeClassName="active_main_navbar_option"><img src='../cupon.svg' alt="mc_icon" />Mis Cupones</NavLink>
      <NavLink exact to="/mcdelivery" activeClassName="active_main_navbar_option"><img src='../motorcycle.svg' alt="mc_icon" />McDelivery</NavLink>
      <NavLink exact to="/stickers" activeClassName="active_main_navbar_option"><img src='../stickers.svg' alt="mc_icon" />Stickers</NavLink>
      <NavLink exact to="/restaurants" activeClassName="active_main_navbar_option"><img src='../restaurant_menu.svg' alt="mc_icon" />Restaurantes</NavLink>
      <NavLink exact to="/menu" activeClassName="active_main_navbar_option"><img src='../menu_book.svg' alt="mc_icon" />Menu</NavLink>
      
      

      <div className='btns_navbar_user'>
      <NavLink to="/"><img src="../shopping_bag.png" alt="shopping_bag" />Carrito</NavLink>
        {userLogged && <button>
          <img src="../account_circle.svg" alt="user_icon"/>
          Perfil
        </button>}

        {userLogged ? <button>
          <img src="../logout.svg" alt="user_icon"/>
          Salir
        </button> : <button>
        <NavLink to="/login"><img src="../login.svg" alt="user_icon"/>
          Ingresa </NavLink>
        </button>}
      </div>

    </div>

  )
}
