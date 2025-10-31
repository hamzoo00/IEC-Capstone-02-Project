import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router'
import Home from './pages/Home'
import { Header } from './components/header'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import { Provider } from 'react-redux'
import {store} from './Store/Store'
import Cart from './pages/Cart'
import Complain from './pages/Complain'

function App() {
 
  return (
    
    <Provider store={store}>
        <BrowserRouter>
         <Header />
          <Routes>
           <Route path='/' element= {<Home />} /> 
           <Route path='/products' element={<Products />} />
           <Route path='/products/:category/:title' element={<ProductDetails />} />
           <Route path='/cart' element={<Cart />} />
           <Route path='/complain' element={<Complain/>} />
         </Routes>
        </BrowserRouter>
   </Provider>

    
  )
}

export default App
