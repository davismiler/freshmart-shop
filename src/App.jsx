import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeaturedProducts from './components/FeaturedProducts'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Category />
      <FeaturedProducts />
    </div>
  )
}

export default App