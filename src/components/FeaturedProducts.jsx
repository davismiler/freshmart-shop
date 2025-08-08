import React from 'react'
import { products } from '../Utils/Data'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'

const FeaturedProducts = () => {
  return (
    <section className='py-12 px-3 md:px-0'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8'>Featured Products</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-6 md:px-8'>
            {
                products.slice(0,5).map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })
            }
        </div>
        <div className='mt-8 text-center'>
            <Link to={'/shop'}><button className='rounded-full cursor-pointer border py-2 px-3 border-gray-500'>View all Products</button></Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts