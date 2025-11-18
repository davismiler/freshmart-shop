import React from 'react'

const CategoryCard = ({ name, image }) => {
    return (
        <div className='overflow-hidden transition-all hover:shadow-lg border border-white/10 rounded-xl glass-card glowing-card cursor-pointer'>
            <div className=''>
                <div className='aspect-square relative bg-gray-800/50'>
                    <img src={image} alt={name} className='object-cover w-full h-full' />
                </div>
                <div className='p-4 text-center'>
                    <h3 className='font-medium text-white'>{name}</h3>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard