import { useGetAllProductQuery } from "../app/service/dummyData";

const AllProducts = () => {

    const { data, isError, isLoading } = useGetAllProductQuery();
    console.log(data);

    if(isError){
        return <div>Something went wrong</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    return(
        <div>
            {
                data?.products.map(p => (
                    <>
                        <h1 key={p.id}>{p.title}</h1>
                        <p>{p.description}</p>
                    </>
                ))
            }
        </div>
    )
}
export default AllProducts;