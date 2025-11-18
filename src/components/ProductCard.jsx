import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from '../Redux/CartSlice'
import { toast } from 'react-toastify'

const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const {cart} = useSelector(store => store.cart)

  const addToCart = (product)=>{
    const productExists = cart.some(item => item.id === product.id);
    if(productExists){
      let newUnit = product.unit
      newUnit += 1;
      dispatch(setCart([...cart]))  //Return the same cart without adding duplicate product
      toast("Product is already in the cart!")
    }else {
      dispatch(setCart([...cart, product])) //Add product if not already in cart
      toast.success("Product is added to cart!")
    }
  }
  return (
    <div className='overflow-hidden transition-all hover:shadow-lg border border-white/10 rounded-lg glass-card glowing-card'>
      <div>
        <div className='aspect-square relative bg-gray-800/50'>
            <img src={product.image} alt={product.name} className='object-cover w-full h-[195px]'/>
        </div>
        <div className='px-3 py-2'>
            <p className='text-sm mt-1 text-gray-400'>{product.category}</p>
            <h3 className='font-semibold text-sm mt-1 h-[40px] text-white line-clamp-2'>{product.name}</h3>
            <p className='text-sm text-gray-400 mt-1'>{product.quantity}</p>
            <p className='font-bold mt-1 text-white'>₹{product.price?.toFixed(2)}</p>
        </div>
      </div>
      <div className='p-4 pt-1'>
        <button onClick={()=>addToCart(product)} className='w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90 text-white flex items-center justify-center py-2 rounded-lg cursor-pointer transition-all duration-300 shadow-lg shadow-purple-500/30'><ShoppingCart className='w-4 h-4 mr-2'/> Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductCard