import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-10 px-4'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
        <div>
          <h3 className='text-xl font-bold mb-2'>FreshMart</h3>
          <p className='text-sm'>Fresh groceries delivered to your doorstep.</p>
          <div className='mt-4'>
            <h4 className='font-medium mb-2'>Follow Us</h4>
            <div className='flex space-x-4'>
              <FaFacebook className='w-5 h-5' />
              <FaInstagram className='w-5 h-5' />
              <FaTwitter className='w-5 h-5' />
            </div>
          </div>
        </div>

        <div>
          <h4 className='text-xl font-bold mb-2'>Links</h4>
          <ul className='space-y-1 text-sm'>
            <li className='hover:text-green-400 cursor-pointer'>About</li>
            <li className='hover:text-green-400 cursor-pointer'>Contact</li>
            <li className='hover:text-green-400 cursor-pointer'>FAQ</li>
            <li className='hover:text-green-400 cursor-pointer'>Privacy</li>
          </ul>
        </div>

        <div>
          <h4 className='text-xl font-bold mb-2'>Info</h4>
          <p className='text-sm mb-1'>123 Grocery St</p>
          <p className='text-sm mb-1'>Phone: (123) 456-7890</p>
          <p className='text-sm'>info@freshmart.com</p>
        </div>

        <div className='md:col-span-1 text-sm mt-8 md:mt-0 text-center md:text-left'>
          <p>&copy; {new Date().getFullYear()} FreshMart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
