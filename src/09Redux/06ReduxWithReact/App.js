import Product from "./components/Product";
import './App.css';
import { useSelector } from "react-redux";

export default function App() {
    const products = useSelector((state) => state.products);
    
    return (
        <div className="products-container">
            {
                products.map(({id, title, rating, price, image}) => (
                    <Product 
                        key={id} 
                        title={title} 
                        rating={rating.rate} 
                        price={price} 
                        imageUrl={image}
                    />
                ))
            }
        </div>
    )
}