import { useSelector } from 'react-redux'
import Product from '../components/Product.jsx'
import { getAllProducts, getAllProductsError, getAllProductsLoadingState } from '../store/slices/productSlice.js'

export default function Home() {

  const productsList = useSelector(getAllProducts);
  const isLoading = useSelector(getAllProductsLoadingState);
  const error = useSelector(getAllProductsError);
  
  return isLoading ? (
    <div className="text-center py-16">
      <p className="text-gray-600 dark:text-gray-400 text-lg">Loading...</p>
    </div>
  ) : (
    error || (
      <div className="container mx-auto px-4 py-8">
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {productsList.map(({ id, title, rating, price, image }) => (
          <Product
            key={id}
            productId={id}
            title={title}
            rating={rating.rate}
            price={price}
            imageUrl={image}
          />
        ))}
      </div>
    )

      {/* Empty State */}
      {productsList.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            No products available
          </p>
        </div>
      )}
    </div>
    )
  )
}