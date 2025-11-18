import React from 'react'
import HeroImg from '../assets/Hero1.png'

const Hero = () => {
    return (
        <section className='relative text-white mt-12 md:mt-15 py-16'>
            <div className='max-w-6xl mx-auto py-16 flex flex-col md:flex-row items-center px-6 md:px-0 gap-7'>
                <div className='md:w-1/2 mb-8 md:mb-0'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        Fresh<span className='ai-gradient-text'>Groceries</span> Delivered to Your Door
                    </h1>
                    <p className='text-lg mb-6 text-gray-300'>Shop from our wide selection of fresh fruits, vegetables, dairy, and more. Get same-day delivery!</p>
                    <div className='flex flex-wrap gap-4'>
                        <button className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:opacity-90 rounded-full px-6 py-2 transition-all duration-300 shadow-lg shadow-purple-500/50'>Shop Now</button>
                        <button className='text-white border border-white/30 bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 rounded-full px-6 py-2 transition-all duration-300'>Learn More</button>
                    </div>
                </div>
                <div className='relative flex justify-center'>
                    <div className='absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg backdrop-blur-sm'></div>
                    <img src={HeroImg} alt="" className='z-10 relative' />
                </div>
            </div>
        </section>
    )
}

export default Hero