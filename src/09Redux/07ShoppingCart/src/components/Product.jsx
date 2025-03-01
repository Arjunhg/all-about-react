import { useDispatch } from 'react-redux'
import { addToCart } from '../store/slices/cartSlice'

export default function Product({ productId, title, rating, price, imageUrl }) {
  const dispatch = useDispatch()
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col">
      {/* Product Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold mb-2">
          <a href="#" className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </a>
        </h3>

        {/* Rating and Price */}
        <div className="flex justify-between items-center mb-4">
          <p className="text-yellow-500 font-medium">
            {+rating} ★★★★
          </p>
          <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
            ${price}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <button
            onClick={() => {
              dispatch(addToCart({ productId, title, rating, price, imageUrl }))
            }}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
          >
            Add to Cart
          </button>
          <button className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 py-2 px-4 rounded-md transition-colors">
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}