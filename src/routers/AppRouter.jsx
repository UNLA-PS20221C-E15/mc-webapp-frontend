import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Navbar from '../components/NavBar/Navbar'
import HomePage from '../pages/HomePage/HomePage'
import MenuPage from '../pages/MenuPage'
import OffersPage from '../pages/OfferPage/OffersPage'
import StickersPage from '../pages/StickersPage'
import TicketsPage from '../pages/TicketsPage'
import OrdersPageRouter from './OrdersPageRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/menu' component={MenuPage} />
        <Route path='/discount_tickets' component={TicketsPage} />
        <Route path='/stickers' component={StickersPage} />
        <Route path='/orders' component={OrdersPageRouter} />
        <Route path='/offers' component={OffersPage} />
        {/* <Route path='/404' component={} /> */}
      </Switch>
    </BrowserRouter>
  )
}
