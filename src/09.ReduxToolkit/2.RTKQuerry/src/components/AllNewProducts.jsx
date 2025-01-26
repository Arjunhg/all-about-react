import { useAddNewProductMutation } from "../app/service/dummyData";

export const AddNewProducts = () => {

    const [addNewProduct, { data, error, isLoading }] = useAddNewProductMutation();

    if(error){
        return <p>Something went wrong</p>
    }
    if(isLoading){
        return <p>Loading...</p>
    }

    const handleAddProduct = async() => {

        try {
            
            const newProduct = {
                id: 1,
                title: 'New Product',
                description: 'New Product Description',
            };

            await addNewProduct(newProduct);
        } catch (error) {
            console.error("Error adding new product: ", error);
        }
    }

    return(
        <div>
            <h1>{data?.id}</h1>
            <h1>{data?.title}</h1>
            <h1>{data?.description}</h1>

            <button onClick={handleAddProduct} disabled={isLoading}>Add New Product</button>
        </div>
    )
}

export default AddNewProducts;