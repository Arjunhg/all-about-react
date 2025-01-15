import React from 'react'
import Card from './components/Card'
import { ThemeProvider } from './components/Theme'

const Main = () => {
  return (
    <ThemeProvider>
      <Card/>
    </ThemeProvider>
  )
}

export default Main
