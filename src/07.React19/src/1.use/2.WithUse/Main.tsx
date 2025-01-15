import React, { Suspense } from 'react'
import FetchTodo from './FetchTodo'

const Main = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <FetchTodo/>
    </Suspense>
  )
}

export default Main
