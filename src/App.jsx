import React from 'react'
import './App.css';
import LatShoppingCart from './components/LatShoppingCart/LatShoppingCart';
import AppRouter from './routers/AppRouter';
import ItemProvider from './store/ItemsProvider';
import ProductProvider from './store/ProductsProvider';


export default function App() {
  return (
    <div >
      <ProductProvider>
        <ItemProvider>
          <LatShoppingCart />
          <AppRouter />
        </ItemProvider>
      </ProductProvider>
    </div>
  )
}
