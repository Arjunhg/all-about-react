import CartItem from '../components/CartItem.jsx'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector((state) => state.cart)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
        Items in Your Cart
      </h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
        {/* Cart Header */}
        <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300">
          <div className="col-span-2 md:col-span-2">Item</div>
          <div className="hidden md:block text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Total</div>
        </div>

        {/* Cart Items */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {cartItems.map(({ productId, title, rating, price, imageUrl, quantity }) => (
            <CartItem
              key={productId}
              productId={productId}
              title={title}
              price={price}
              quantity={quantity}
              imageUrl={imageUrl}
              rating={rating}
            />
          ))}
        </div>

        {/* Cart Footer - Total */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-end items-center">
            <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
              Total: $
              {cartItems.reduce(
                (acc, item) => acc + item.quantity * item.price,
                0
              ).toFixed(2)}
            </div>
          </div>
        </div>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 && (
        <div className="text-center py-8 text-gray-600 dark:text-gray-400">
          Your cart is empty
        </div>
      )}
    </div>
  )
}