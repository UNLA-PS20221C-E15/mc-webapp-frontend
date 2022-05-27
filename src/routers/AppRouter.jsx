import React from 'react'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Navbar from '../components/NavBar/Navbar'
import HomePage from '../pages/HomePage/HomePage'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        {/* <Route path='/404' component={} /> */}
      </Switch>
    </BrowserRouter>
  )
}
