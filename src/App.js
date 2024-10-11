import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ProductList from './components/ProductList'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </Router>
  )
}

export default App