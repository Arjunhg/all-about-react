import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
// import Pagination from "./components/10.Pagination"
import InfiniteQueries from "./components/11.InfiniteQueries"
// import MutatingData from "./components/9.MutatingData"
// import FetchFromMultipleEndpoints from "./components/8.FetchFromMultipleEndpoints"
// import Deduplication from "./components/4.Deduplication/4.Deduplication"
// import FetchOneItem from "./components/5.FetchOneItem"
// import StaleTime from "./components/6.StaleTime"
// import RefetchInterval from "./components/7.RefetchInterval"
// import WithoutTanstackQuery from "./components/1.WithoutTanstackQuery"
// import RaceCondition from "./components/2.RaceCondition"
// import WithTanstackQuery from "./components/3.WithTanstackQuery"
// import DeduplicationDemo from "./components/4.Deduplication/4.Deduplication"
// import WithoutDeduplication from "./components/4.Deduplication/fetching/WithoutDeduplication"
// import WithDuplication from "./components/4.Deduplication/fetching/WithDeduplication"

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200 p-4">
        <InfiniteQueries/>
      </div>
    </QueryClientProvider>

    // <WithoutDeduplication/>
  )
}

export default App
