import React, { useState } from 'react'
import Logo from "../assets/Logo.png"
import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'
import CartComp from './CartComp'
import { useSelector } from 'react-redux'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {
  const [isOpen , setIsOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const {cart} = useSelector(store => store.cart)
  const onClose = ()=>{
    setIsOpen(false)
  }
  const toggleNav = ()=>{
    setIsNavOpen(!isNavOpen)
  }
  isOpen ? document.body.style.overflow = "hidden": document.body.style.overflow = "auto"
  return (
    <div>
      <div className='mx-auto flex justify-between items-center px-6 py-3 fixed top-0 z-20 bg-gray-900/30 backdrop-blur-md w-full border-b border-white/10 shadow-xl lg:px-[180px]'>
           {/* logo section */}
           <Link to={'/'} className='relative group'>
             <div className="absolute inset-0 z-0 pointer-events-none">
               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-900 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-500"></div>
             </div>
             <img src={Logo} alt="" className='md:w-52 w-40 relative z-10'/>
           </Link>
           {/* menu section */}
           <nav className='flex gap-5'>
            <ul className='text-xl font-semibold md:flex items-center gap-7 hidden'>
                <Link to={'/'}><li className='text-gray-300 hover:text-white transition-colors'>Home</li></Link>
                <Link to={'/shop'}><li className='text-gray-300 hover:text-white transition-colors'>Shop</li></Link>
                <Link to={'/about'}><li className='text-gray-300 hover:text-white transition-colors'>About</li></Link>
                <Link to={'/contact'}><li className='text-gray-300 hover:text-white transition-colors'>Contact</li></Link>
            </ul>
            <Link className='relative group' onClick={()=>setIsOpen(true)}>
            <ShoppingCart className='w-6 h-6 text-white group-hover:text-blue-400 transition-colors'/>
            <span className='absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cart.length}</span>
            </Link>
           {
            isNavOpen ? <HiMenuAlt3 className='h-7 w-7 md:hidden text-white' onClick={toggleNav}/>:<HiMenuAlt1 className='h-7 w-7 md:hidden text-white' onClick={toggleNav}/>
           }
           </nav>
      </div>
      {
        isNavOpen && <ResponsiveMenu isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen}/>
      }
      {
        isOpen && (
          <div className='fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-sm z-40' onClick={()=>setIsOpen(false)}></div>
        )
      }
     <CartComp isOpen={isOpen} onClose={onClose}/>
    </div>
  )
}

export default Navbar