import { Link } from '@tanstack/react-router'
import { useEffect } from 'react'
// import CartIcon from 'cart-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { fetchError, fetchProducts, updateAllproducts } from '../store/slices/productSlice';
// import { productsList } from '../store/productList.js'

export default function Header() {

  const dispatch = useDispatch();

  /*
  useEffect(() => {
    dispatch(fetchProducts());
    fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
      console.log(data);
      dispatch(updateAllproducts(data));
    }).catch(() => {
      dispatch(fetchError());
    })
    // dispatch(updateAllproducts(productsList))
  }, [])
  */

  useEffect(() => {
    dispatch({
      type: 'api/makeCall',
      payload: {
        url: 'products',
        onStart: fetchProducts.type,
        onSuccessType: updateAllproducts.type,
        // onSuccessType: updateAllproducts not valid
        // onSuccessType: updateAllproducts(data); not valid
        /*
          // : Beacuse updateAllproducts(data) is directly calling the action creator and the action creator returns action object that contains type and payload. Type is 'product/updateAllproducts' and payload is data. But this data must come from api. And since in this useEffect we are not making any api request we won't have access to data and hence code breaks. So we first need to catch this 'api/makeCall' action object in apiMiddleware and then make api request.
         */
        onError: fetchError.type
      }
    })
  }, [dispatch])
  // Or make export const fetchData = (payload) => ({type: 'api/makeCall', payload}) in apiMiddleware.js and then use it here as dispatch(fetchData({url: 'products', onStart: fetchProducts.type, onSuccessType: updateAllproducts.type, onError: fetchError.type}))

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