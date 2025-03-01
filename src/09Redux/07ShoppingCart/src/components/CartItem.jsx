import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity } from "../store/cartReducer";

export default function CartItem({
    productId,
    title,
    price,
    imageUrl,
    quantity
}){
    const dispatch = useDispatch();

    return (
        <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
            {/* Product Info Section */}
            <div className="flex items-center space-x-4 flex-1">
                <img 
                    src={imageUrl} 
                    alt={title} 
                    className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">${price}</p>
                </div>
            </div>

            {/* Unit Price */}
            <div className="hidden md:block w-24 text-center text-gray-700 dark:text-gray-300">
                ${price}
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center space-x-3 mx-4">
                <button 
                    onClick={() => dispatch(decreaseQuantity(productId))}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                    -
                </button>
                <span className="w-8 text-center font-medium dark:text-gray-200">
                    {quantity}
                </span>
                <button 
                    onClick={() => dispatch(increaseQuantity(productId))}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                >
                    +
                </button>
            </div>

            {/* Total Price */}
            <div className="w-24 text-right font-semibold text-gray-800 dark:text-gray-200">
                ${(quantity * price).toFixed(2)}
            </div>
        </div>
    )
}