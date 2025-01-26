import { useDeleteProductMutation } from '../app/service/dummyData';

export const DeleteProduct = () => {

    const [deleteProduct, { data, isLoading, error }] = useDeleteProductMutation();

    if(isLoading) return <h1>Loading...</h1>
    if(error) return <h1>Error...</h1>

    const handleDelete = async() => {

        try {
            await deleteProduct(1);
        } catch (error) {
            console.error('Failed to delete the product', error);
        }
    }

    return (
        <div>
          <h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
    
          <button onClick={handleDelete} disabled={isLoading}>
            Delete Product
          </button>
        </div>
      );
}