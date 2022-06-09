import React from 'react'
import './App.css';
import LatShoppingCart from './components/LatShoppingCart/LatShoppingCart';
import AppRouter from './routers/AppRouter';
import ProductProvider from './store/ProductsProvider';


export default function App() {
  return (
    <div>
      <ProductProvider>
        <LatShoppingCart/>
        <AppRouter />
      </ProductProvider>
    </div>
  )
}
