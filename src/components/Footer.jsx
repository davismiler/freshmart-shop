import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='glass-card border-t border-white/10 text-white py-10 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-2 ai-gradient-text'>FreshMart</h3>
          <p className='text-sm text-gray-300'>Fresh groceries delivered to your doorstep.</p>
          <div className='mt-4'>
            <h4 className='font-medium mb-2 text-white'>Follow Us</h4>
            <div className='flex space-x-4'>
              <FaFacebook className='w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors' />
              <FaInstagram className='w-5 h-5 hover:text-pink-400 cursor-pointer transition-colors' />
              <FaTwitter className='w-5 h-5 hover:text-blue-400 cursor-pointer transition-colors' />
            </div>
          </div>
        </div>

        <div>
          <h4 className='text-xl font-bold mb-2 text-white'>Links</h4>
          <ul className='space-y-1 text-sm'>
            <li className='hover:text-purple-400 cursor-pointer text-gray-300 transition-colors'>About</li>
            <li className='hover:text-purple-400 cursor-pointer text-gray-300 transition-colors'>Contact</li>
            <li className='hover:text-purple-400 cursor-pointer text-gray-300 transition-colors'>FAQ</li>
            <li className='hover:text-purple-400 cursor-pointer text-gray-300 transition-colors'>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-bold mb-2 text-white'>Info</h4>
          <p className='text-sm mb-1 text-gray-300'>123 Grocery St</p>
          <p className='text-sm mb-1 text-gray-300'>Phone: (123) 456-7890</p>
          <p className='text-sm text-gray-300'>info@freshmart.com</p>
        </div>

        <div className='md:col-span-1 text-sm mt-8 md:mt-0 text-center md:text-left'>
          <p className='text-gray-400'>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
