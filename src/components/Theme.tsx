import React from 'react'
import ThemeProvider from './ThemeContext'
import FunctionContextComponent from './FunctionContextComponent'

const Theme = () => {
  return (
    <>
      <ThemeProvider>
          <FunctionContextComponent />
      </ThemeProvider>
    </>

  )
}

export default Theme