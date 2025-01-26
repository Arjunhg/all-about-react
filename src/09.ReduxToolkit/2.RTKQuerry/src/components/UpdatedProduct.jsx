import { useUpdateProductMutation } from '../app/service/dummyData';

export const UpdatedProduct = () => {

    const [updateProduct, { data, error, isLoading }] = useUpdateProductMutation();

    if(isLoading) return <p>Loading...</p>
    if(error) return <p>Error...</p>

    const handleUpdateProduct = async() => {

        try {
            
            const updatedProductDetails = {
                title: "Updated Product",
            }

            await updateProduct({id: 1, updatedProduct: updatedProductDetails});
        } catch (error) {
            console.error("Error updating product: ", error);
        }
    }

    return(
        <div>
            <h1>{data?.title}</h1>

            <button onClick={handleUpdateProduct} disabled={isLoading}>
                Update Product
            </button>
        </div>
    )
}

