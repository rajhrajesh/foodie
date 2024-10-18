import React, { useState } from 'react'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import './App.css'
import Cart from './Pages/Cart'
import PlaceOrder from './Pages/PlaceOrder'
import Footer from './components/Footer'
import LoginPopUp from './components/LoginPopUp'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopUp/> :<></>}
      <div className='app'>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App