import React, { useState } from 'react'
import { products } from '../Utils/Data'
import ProductCard from '../components/ProductCard'
import empty from "../assets/empty.jpg"
import { FaFilter } from 'react-icons/fa6'

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 500])
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [openFilter, setOpenFilter] = useState(false)

  const toggleFilter = () => {
    setOpenFilter(!openFilter)
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || product.category === category) &&
    product.price >= priceRange[0] && product.price <= priceRange[1]
  )

  return (
    <div className='max-w-6xl mx-auto flex flex-col lg:gap-6 my-7 lg:mt-28 mt-24 h-max'>
      {/* filter section */}
      <div className='col-span1 p-4 glass-card h-max rounded-lg fixed w-[280px] mb-10 hidden md:block'>
        <h2 className='text-lg font-semibold mb-4 text-white'>Filters</h2>
        <input
          placeholder='Search...'
          className='mb-4 bg-gray-800/50 border border-white/10 text-white p-2 w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className='w-full p-2 border border-white/10 rounded mb-4 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
          <option value="Bakery">Bakery</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
        </select>
        <div className='mb-4'>
          <label className='text-white'>Price Range: ₹{priceRange[0]}-₹{priceRange[1]}</label>
          <input type="range" min="0" max="500" value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
            className='w-full'
          />
        </div>
        <button
          className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-3 py-1 rounded-md text-white cursor-pointer hover:opacity-90 transition-all duration-300'
          onClick={() => { setSearch(''); setCategory(''); setPriceRange([0, 500]) }}
        >Reset Filters</button>
      </div>
      {/* Mobile filter */}
      <div className={`md:hidden glass-card flex justify-between items-center mx-4 px-4 py-3 ${openFilter ? "rounded-t-md" : "rounded-md"}`}>
        <h1 className='font-semibold text-lg text-white'>Filters</h1>
        <FaFilter onClick={toggleFilter} className='text-white cursor-pointer' />
      </div>
      {
        openFilter ? <div className='glass-card p-4 mx-4 rounded-b-md md:hidden'>
          <input
            placeholder='Search...'
            className='mb-4 bg-gray-800/50 border border-white/10 text-white p-2 w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className='w-full p-2 border border-white/10 rounded mb-4 bg-gray-800/50 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Fruits">Fruits</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
          </select>
          <div className='mb-4 flex flex-col gap-2'>
            <label className='text-white'>Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}</label>
            <input type="range" min="0" max="500" value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className='w-[150px]'
            />
          </div>
          <button
            className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 px-3 py-1 rounded-md text-white cursor-pointer hover:opacity-90 transition-all duration-300'
            onClick={() => { setSearch(''); setCategory(''); setPriceRange([0, 500]) }}
          >Reset Filters</button>
        </div> : <div></div>
      }

      {/* products section */}
      {
        filteredProducts.length > 0 ? (
          <div className='col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:ml-[300px] px-4 md:px-0 mt-6 md:mt-0'>
            {
              filteredProducts.map((product) => {
                return <ProductCard key={product.id} product={product} />
              })
            }
          </div>
        ) : (
          <div className='lg:ml-[300px] flex justify-center'>
            <img src={empty} alt="" className='w-[500px]' />
          </div>
        )
      }

    </div>
  )
}

export default Shop