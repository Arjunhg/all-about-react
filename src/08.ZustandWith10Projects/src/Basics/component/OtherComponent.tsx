import { useCounterStore } from "../store";

const OtherComponent = () => {

    const { incr, decr } = useCounterStore();

    return(
        <div className="flex space-x-4">
            <button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
                onClick={incr}
            >
                +
            </button>
            <button
                className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
                onClick={decr}
            >
                -
            </button>
        </div>
    )
}
export default OtherComponent;