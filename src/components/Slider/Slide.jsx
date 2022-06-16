import React from 'react'
import { NavLink } from 'react-router-dom'
import './Slider.css'

export default function Slide({img}) {
  return (
    <NavLink to="/orders" style={{
      backgroundImage: `url('../${img}')`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "100%",
      minHeight:"00px",
      width: "100%",
      position:"absolute",
      transition:"0.3s"
      
  }}>
      
    </NavLink>
  )
}
