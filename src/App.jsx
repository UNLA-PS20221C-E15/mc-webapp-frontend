import React from 'react'
import './App.css';
import AppRouter from './routers/AppRouter';
import ProductProvider from './store/ProductsProvider';


export default function App() {
  return (
    <div>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </div>
  )
}
