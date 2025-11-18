import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import About from './Pages/About'
import Contact from './Pages/Contact'

const App = () => {
  return (
    <div className="min-h-screen w-full font-sans relative">
      {/* Dark Horizon Glow - Base Background Layer */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #0d1a36 100%)",
        }}
      />
      <div className="relative z-10">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App