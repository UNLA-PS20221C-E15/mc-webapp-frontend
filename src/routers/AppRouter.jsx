import React from 'react'
import { BrowserRouter,Route,Switch, useParams } from 'react-router-dom'
import Navbar from '../components/NavBar/Navbar'
import SingleViewProduct from '../pages/SingleViewProductPage/SingleViewProductPage'
import HomePage from '../pages/HomePage/HomePage'
import MenuPage from '../pages/MenuPage'
import OffersPage from '../pages/OfferPage/OffersPage'
import StickersPage from '../pages/StickersPage'
import TicketsPage from '../pages/TicketsPage'
import OrdersPageRouter from './OrdersPageRouter'
import CheckOutPage from '../pages/CheckOutPage/CheckOutPage'

import LoginPage from '../components/login/LoginPage'
import RegisterPage from '../components/register/RegisterPage'

export default function AppRouter() {

  const VIEW_PRODUCT = () => {
    let {name} = useParams();
    return(<SingleViewProduct name_product={name}/>)
}
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/checkoutpage' component={CheckOutPage} />
        <Route path='/single_view_product/:name' component={VIEW_PRODUCT} />
        {/* <Route path='/discount_tickets' component={TicketsPage} /> */}
        {/* <Route path='/stickers' component={StickersPage} /> */}
        <Route path='/orders' component={OrdersPageRouter} />
        {/* <Route path='/offers' component={OffersPage} /> */}
        {/* <Route path='/404' component={} /> */}
        
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  )
}
