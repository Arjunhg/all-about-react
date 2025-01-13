import { useEffect, useState } from "react";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
};

const UseEffect = () => {

    const [data, setData] = useState<Product | null>(null);

    useEffect(() => {
        const fetchData = async() => {
           try {
            const res = await fetch("https://dummyjson.com/product/1");
            const data = await res.json();
            setData(data);
           } catch (error) {
            console.error("Error Fetching data:", error);
           }
        }
        fetchData();
    },[]);

    return(
        <main>
            {
                data ? (
                    <section>
                        <p>ID: {data.id}</p>
                        <p>Title: {data.title}</p>
                        <p>Description: {data.description}</p>
                        <p>Price: {data.price}</p>
                        <p>Discount Percentage: {data.discountPercentage}</p>
                        <p>Rating: {data.rating}</p>
                        <p>Stock: {data.stock}</p>
                        <p>Brand: {data.brand}</p>
                        <p>Category: {data.category}</p>
                        <p>
                        <img
                            src={data.thumbnail}
                            alt={`Thumbnail of ${data.title}`}
                            style={{ maxWidth: "100px", height: "auto" }}
                        />
                        </p>
                        {data.images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Image ${index + 1} of ${data.title}`}
                                style={{ maxWidth: "200px", height: "auto", margin: "5px" }}
                            />
                        ))}
                    </section>
                ) : (
                    <p>Loading...</p>
                )
            }
        </main>
    )
}
export default UseEffect;