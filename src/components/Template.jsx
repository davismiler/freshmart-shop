import React from 'react'

const Template = () => {
    return (
        <section className='py-12'>
            <div className='container px-4 mx-auto text-center'>
                <h2 className='text-3xl font-bold mb-4 text-white'>Free Delivery on Your First Order</h2>
                <p className='text-lg mb-6 max-w-2xl mx-auto text-gray-300'>Use code FRESH10 at checkout for free delivery on orders over $30</p>
                <button className='rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white px-6 py-2 transition-all duration-300 shadow-lg shadow-purple-500/50'>Shop Now</button>
            </div>
        </section>
    )
}

export default Template