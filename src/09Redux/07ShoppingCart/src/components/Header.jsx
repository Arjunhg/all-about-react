import { Link } from '@tanstack/react-router'
// import CartIcon from 'cart-icon.svg'
import { useSelector } from 'react-redux'

export default function Header() {
  const cartItems = useSelector((state) => state.cart)

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <h1 className="text-2xl font-bold">
            <Link 
              to="/" 
              className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Shopee
            </Link>
          </h1>

          {/* Cart Icon with Counter */}
          <Link 
            to="/cart" 
            className="relative flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
          >
            <img 
              src="/cart-icon.svg"
              alt="cart-icon" 
              className="w-6 h-6 dark:filter dark:invert"
            />
            {cartItems.length > 0 && (
              <div className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity,
                  0
                )}
              </div>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}