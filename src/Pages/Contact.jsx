import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'


const Contact = () => {
  return (
    <div className=''>
      <div className="min-h-screen max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  items-center justify-center p-4 mt-16 md:mt-0">
        <div className="glass-card shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-bold text-center ai-gradient-text">Contact Freshmart</h2>
          <p className="text-gray-300 text-center mt-2">We would love to hear from you!</p>

          <form className="mt-4">
            <div className="mb-4">
              <label className="block text-white mb-2">Name</label>
              <input type="text" className="w-full p-2 border border-white/10 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400" placeholder="Your Name" required />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Email</label>
              <input type="email" className="w-full p-2 border border-white/10 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400" placeholder="Your Email" required />
            </div>

            <div className="mb-4">
              <label className="block text-white mb-2">Message</label>
              <textarea className="w-full p-2 border border-white/10 bg-gray-800/50 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400" placeholder="Your Message" rows="4" required></textarea>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 rounded-md hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/30">Send Message</button>
          </form>
        </div>

      
        <div className="glass-card shadow-lg rounded-lg p-6 w-full max-w-md mb-6">
          <h2 className="text-2xl font-semibold mb-6 text-white">Contact Information</h2>

          <div className="space-y-6">
            <div className="flex items-start">
              <Phone className="h-5 w-5 text-purple-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-white">Phone</h3>
                <p className="text-gray-300">(555) 123-4567</p>
                <p className="text-gray-300">(555) 765-4321 (Customer Service)</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="h-5 w-5 text-purple-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-white">Email</h3>
                <p className="text-gray-300">info@freshmart.com</p>
                <p className="text-gray-300">orders@freshmart.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-purple-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-white">Address</h3>
                <p className="text-gray-300">123 Fresh Avenue</p>
                <p className="text-gray-300">Produce City, PC 12345</p>
              </div>
            </div>

            <div className="flex items-start">
              <Clock className="h-5 w-5 text-purple-400 mt-1 mr-3" />
              <div>
                <h3 className="font-medium text-white">Store Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-300">
                  <p>Monday - Friday:</p>
                  <p>7:00 AM - 9:00 PM</p>
                  <p>Saturday:</p>
                  <p>8:00 AM - 8:00 PM</p>
                  <p>Sunday:</p>
                  <p>9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>       
        </div>
      </div>
    </div>
  )
}

export default Contact