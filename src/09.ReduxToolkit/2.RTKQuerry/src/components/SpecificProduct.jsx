import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {

    const { data, error, isLoading } = useGetProductByIdQuery(1);

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return(
        <div>
            <h1>{data?.brand}</h1>
            <h1>{data?.category}</h1>
            <h1>{data?.description}</h1>
        </div>
    )
}
export default SpecificProduct;